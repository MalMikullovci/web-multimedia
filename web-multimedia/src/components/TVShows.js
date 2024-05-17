// src/components/TVShows.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TVShows = ({ shows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const itemsPerPage = 12;
  const filteredShows = shows.filter(show =>
    (!genre || show.genre_ids.includes(parseInt(genre))) &&
    (!year || new Date(show.first_air_date).getFullYear() === parseInt(year))
  );
  const totalPages = Math.ceil(filteredShows.length / itemsPerPage);
  const displayedShows = filteredShows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full px-4 py-6 bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">TV Shows</h1>

      {/* Filter Section */}
      <div className="mb-4 flex justify-center">
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="mr-4 bg-gray-800 text-white p-2 rounded">
          <option value="">All Genres</option>
          <option value="10759">Action & Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="10765">Sci-Fi & Fantasy</option>
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

      {/* TV Shows Grid */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular TV Shows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {displayedShows.length > 0 ? (
            displayedShows.map((show) => (
              <Link to={`/show/${show.id}`} key={show.id} className="relative group text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 border-none">
                <div className="relative pb-[150%] overflow-hidden bg-gray-900 rounded-lg border-none">
                  <img
                    className="absolute h-full w-full object-cover transition duration-300 group-hover:opacity-50 rounded-lg border-none"
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={`${show.name} Poster`}
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
                  <h5 className="text-lg font-semibold mt-2">{show.name}</h5>
                  <p className="text-sm text-gray-400">{show.first_air_date.split('-')[0]}</p>
                  <p className="text-sm text-gray-400">{show.vote_average} / 10</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-white">No TV shows available.</p>
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

export default TVShows;
