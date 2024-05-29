// src/components/ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [similarShows, setSimilarShows] = useState([]);
  const [episodes, setEpisodes] = useState({});
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    const fetchSimilarShows = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSimilarShows(data.results.slice(0, 5)); // Limit similar shows to 5
      } catch (error) {
        console.error('Error fetching similar shows:', error);
      }
    };

    fetchShowDetails();
    fetchSimilarShows();
  }, [id]);

  const fetchEpisodes = async (seasonNumber) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEpisodes((prevEpisodes) => ({ ...prevEpisodes, [seasonNumber]: data.episodes }));
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const toggleSeason = (seasonNumber) => {
    if (episodes[seasonNumber]) {
      setSelectedSeason(selectedSeason === seasonNumber ? null : seasonNumber);
    } else {
      fetchEpisodes(seasonNumber);
      setSelectedSeason(seasonNumber);
    }
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  const carouselSettings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="show-details bg-gray-900 text-white p-10">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={`${show.name} Poster`}
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-400">{show.name}</h2>
          <p className="mt-4 text-lg">{show.overview}</p>
          <div className="mt-6 space-y-2">
            <p><strong>First Air Date:</strong> {show.first_air_date}</p>
            <p><strong>Number of Episodes:</strong> {show.number_of_episodes}</p>
            <p><strong>Number of Seasons:</strong> {show.number_of_seasons}</p>
            <p><strong>Average Rating:</strong> ⭐ {show.vote_average}</p>
            <p><strong>Genres:</strong> {show.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
          <div className="mt-6 space-y-4">
            {show.seasons.map((season) => (
              <div key={season.season_number}>
                <button
                  className="w-full text-left px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => toggleSeason(season.season_number)}
                >
                  <span className="flex justify-between items-center">
                    <span>{season.name} ({season.episode_count} episodes)</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${selectedSeason === season.season_number ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </button>
                {selectedSeason === season.season_number && (
                  <div className="mt-2 px-4">
                    {episodes[season.season_number] ? (
                      <ul className="space-y-2">
                        {episodes[season.season_number].map((episode) => (
                          <li key={episode.id} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center">
                            <img
                              className="w-16 h-9 object-cover rounded-md mr-4"
                              src={`https://image.tmdb.org/t/p/w200${episode.still_path}`}
                              alt={`${episode.name} Still`}
                            />
                            <Link to={`/show/${id}/season/${season.season_number}/episode/${episode.episode_number}`} className="flex-1">
                              <strong>Episode {episode.episode_number}:</strong> {episode.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>Loading episodes...</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-400 mb-6">Similar Shows</h3>
        <Slider {...carouselSettings}>
          {similarShows.map((similarShow) => (
            <div key={similarShow.id} className="flex flex-col items-center px-2 cursor-pointer">
              <Link to={`/show/${similarShow.id}`}>
                <img
                  className="w-full h-48 object-cover rounded-md shadow-md"
                  src={`https://image.tmdb.org/t/p/w500${similarShow.backdrop_path}`}
                  alt={`${similarShow.name} Poster`}
                />
                <p className="mt-2 text-lg text-center">{similarShow.name}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShowDetails;
