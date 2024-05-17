// src/components/Movies.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const itemsPerPage = 12;
  const filteredMovies = movies.filter(movie =>
    (!genre || movie.genre_ids.includes(parseInt(genre))) &&
    (!year || new Date(movie.release_date).getFullYear() === parseInt(year))
  );
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const displayedMovies = filteredMovies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full px-4 py-6 bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Movies</h1>

      {/* Filter Section */}
      <div className="mb-4 flex justify-center">
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="mr-4 bg-gray-800 text-white p-2 rounded">
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="27">Horror</option>
          {/* Add more genres as needed */}
        </select>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mr-4 bg-gray-800 text-white p-2 rounded"
        />
        <button onClick={() => { setGenre(''); setYear(''); }} className="bg-blue-600 text-white px-4 py-2 rounded">Reset Filters</button>
      </div>

      {/* Movies Grid */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
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
                  <h5 className="text-lg font-semibold mt-2">{movie.title}</h5>
                  <p className="text-sm text-gray-400">{movie.release_date.split('-')[0]}</p>
                  <p className="text-sm text-gray-400">{movie.runtime ? `${movie.runtime} min` : ''}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-white">No movies available.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center text-white">
          <button 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
