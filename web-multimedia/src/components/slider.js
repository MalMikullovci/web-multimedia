import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'; // Import CSS for slider styling
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function MySwiper() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [movieDetailsList, setMovieDetailsList] = useState([]);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHoveredIndex(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Function to fetch movie details by ID
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    const fetchDetailsForMovies = async () => {
      const movieIds = [609681, 786892]; // IDs of the movies to fetch
      const detailsPromises = movieIds.map(id => fetchMovieDetails(id));
      const movieDetails = await Promise.all(detailsPromises);
      setMovieDetailsList(movieDetails);
    };
  
    fetchDetailsForMovies();
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movieDetailsList.map((movieDetails, index) => (
          <SwiperSlide key={index} onClick={() => navigate(`/movie/${movieDetails.id}`)}>
            <div
              className="swiper-slide-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} alt={movieDetails?.title} className="swiper-image rounded-md shadow-md transition-transform duration-300 transform hover:scale-105" />
              {hoveredIndex && (
                <div className="slide-details bg-black bg-opacity-70 absolute bottom-4 left-4 rounded-md p-4 transition-opacity duration-300 opacity-100">
                  <h3 className="movie-title text-white text-4xl font-semibold">{movieDetails?.title}</h3>
                  <p className="movie-description text-white text-xl">{movieDetails?.overview}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySwiper;
