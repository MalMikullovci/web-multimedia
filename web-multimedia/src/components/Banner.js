import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fav1Poster from '../images/civil-war.jpg';
import fav2Poster from '../images/betmeni.jpg';
import fav3Poster from '../images/2001.jpg';
import fav4Poster from '../images/arrival.jpg';
import fav5Poster from '../images/donnie.jpg';
import fav6Poster from '../images/dun2.jpg';
import fav7Poster from '../images/godzilla.jpg';

const Banner = ({ movies = [] }) => {
  const favoriteMovies = [
    {
      id: 'fav1',
      title: 'Civil war',
      poster_path: fav1Poster,
      release_date: '2023-01-01',
      runtime: 120,
    },
    {
      id: 'fav3',
      title: 'Your Favorite Movie 2',
      poster_path: fav2Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    {
      id: 'fav4',
      title: 'Your Favorite Movie 2',
      poster_path: fav3Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    {
      id: 'fav5',
      title: 'Your Favorite Movie 2',
      poster_path: fav4Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    {
      id: 'fav6',
      title: 'Your Favorite Movie 2',
      poster_path: fav5Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    {
      id: 'fav7',
      title: 'Your Favorite Movie 2',
      poster_path: fav6Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    {
      id: 'fav8',
      title: 'Your Favorite Movie 2',
      poster_path: fav7Poster,
      release_date: '2022-01-01',
      runtime: 130,
    },
    
    // Add more favorite movies here...
  ];

  return (
    <div className="bg-gray-900 p-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular Movies</h2>

      {/* Favorite Movies Grid */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">Favorite Movies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {favoriteMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="relative group text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 border-none">
              <div className="relative pb-[150%] overflow-hidden bg-gray-900 rounded-lg border-none">
                <img
                  className="absolute h-full w-full object-cover transition duration-300 group-hover:opacity-50 rounded-lg border-none"
                  src={movie.poster_path}
                  alt={`${movie.title} Poster`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-lg border-none">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-6.451 3.907A1 1 0 017 14.235V9.765a1 1 0 011.301-.954l6.451 3.907a1 1 0 010 1.618z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2 text-center bg-gray-900 border-none">
                <h5 className="text-sm font-semibold mt-2">{movie.title}</h5>
                <p className="text-xs text-gray-400">{movie.release_date.split('-')[0]}</p>
                <p className="text-xs text-gray-400">{movie.runtime ? `${movie.runtime} min` : ''}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* API Movies Grid */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center text-white">Movies from API</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id} className="relative group text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 border-none">
                <div className="relative pb-[150%] overflow-hidden bg-gray-900 rounded-lg border-none">
                  <img
                    className="absolute h-full w-full object-cover transition duration-300 group-hover:opacity-50 rounded-lg border-none"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-lg border-none">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-6.451 3.907A1 1 0 017 14.235V9.765a1 1 0 011.301-.954l6.451 3.907a1 1 0 010 1.618z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-2 text-center bg-gray-900 border-none">
                  <h5 className="text-sm font-semibold mt-2">{movie.title}</h5>
                  <p className="text-xs text-gray-400">{movie.release_date.split('-')[0]}</p>
                  <p className="text-xs text-gray-400">{movie.runtime ? `${movie.runtime} min` : ''}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-white">No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  movies: PropTypes.array,
};

export default Banner;
