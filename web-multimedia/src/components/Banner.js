// Banner.js
import React from 'react';

const Banner = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map(movie => (
        <div key={movie.id} className="max-w-sm bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
