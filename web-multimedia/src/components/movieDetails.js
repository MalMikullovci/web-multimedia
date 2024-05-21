import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [budget, setBudget] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieData = await response.json();

        // Fetch movie credits to get director and cast information
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4602c2c330d0e8a431a05eada3f7380`);
        if (!creditsResponse.ok) {
          throw new Error(`HTTP error! status: ${creditsResponse.status}`);
        }
        const creditsData = await creditsResponse.json();

        // Extract director from credits data
        const director = creditsData.crew.find(member => member.job === "Director");

        // Extract top 6 cast members' names
        const cast = creditsData.cast.slice(0, 6).map(member => member.name);

        // Set movie data with director and cast information
        setMovie({
          ...movieData,
          director: director ? director.name : "Unknown",
          cast: cast.join(', '), // Joining cast names into a comma-separated string
          media_type: "Movie" // Manually setting media_type as "Movie"
        });

        // Fetch similar movies
        const similarResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!similarResponse.ok) {
          throw new Error(`HTTP error! status: ${similarResponse.status}`);
        }
        const similarData = await similarResponse.json();
        setSimilarMovies(similarData.results.slice(0, 8)); // Limit to 8 similar movies

        // Fetch movie videos to get the trailer
        const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!videosResponse.ok) {
          throw new Error(`HTTP error! status: ${videosResponse.status}`);
        }
        const videosData = await videosResponse.json();
        const trailerData = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        setTrailer(trailerData ? `https://www.youtube.com/embed/${trailerData.key}` : null);

        // Fetch movie details again to get budget and revenue
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!detailsResponse.ok) {
          throw new Error(`HTTP error! status: ${detailsResponse.status}`);
        }
        const detailsData = await detailsResponse.json();
        setBudget(detailsData.budget);
        setRevenue(detailsData.revenue);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 

  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <div className="md:ml-10 mt-6 md:mt-0 flex-1">
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <span className="bg-blue-600 px-2 py-1 rounded-md">HD</span>
            <span>⭐{movie.vote_average}</span>
            <span>{movie.release_date.split('-')[0]}</span>
            <span>{movie.runtime} min</span>
          </p>
          <p>{movie.tagline}</p>
          <p className="mt-4">{movie.overview}</p>
          <div className="mt-4 space-y-2">
            <p><strong>Type:</strong> {movie.media_type}</p> {/* Media type should now be correctly displayed */}
            <p><strong>Genre:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
            <p><strong>Release:</strong> {movie.release_date}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            {budget !== null && (
              <p><strong>Budget:</strong> {formatCurrency(budget)}</p>
            )}
            {revenue !== null && (
              <p><strong>Revenue:</strong> {formatCurrency(revenue)}</p>
            )}
          </div>
          {trailer && (
            <div className="mt-4">
              <h3 className="text-xl font-bold">Trailer</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="560"
                  height="315"
                  src={trailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Similar Movies</h3>
        <Slider {...sliderSettings}>
          {similarMovies.map(similarMovie => (
            <div key={similarMovie.id} className="flex flex-col items-center px-2 cursor-pointer" >
              <Link to={`/movie/${similarMovie.id}`}>

              <img
                className="w-full h-48 object-cover rounded-md shadow-md"
                src={`https://image.tmdb.org/t/p/w500${similarMovie.backdrop_path}`}
                alt={`${similarMovie.title} Poster`}
              />
              <p className="mt-2 text-lg text-center">{similarMovie.title}</p>
        </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieDetails;
