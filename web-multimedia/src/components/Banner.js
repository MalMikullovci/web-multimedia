import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ movies = [] }) => {
  return (
    <div className="bg-gray-900 p-10">
      {/* Display text "Movies" */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Movies</h2>
      
      {/* Display all movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="bg-blue-900 text-white rounded overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
              <div className="relative pb-[120%]"> {/* Adjusted the aspect ratio to be more compact */}
                <img
                  className="absolute h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              </div>
              <div className="p-2 text-center">
                <h5 className="text-sm font-semibold">{movie.title}</h5>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-white">No movies available.</p>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  movies: PropTypes.array,
};

export default Banner;
