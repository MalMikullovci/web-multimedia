import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Shows = ({ shows = [] }) => {
  return (
    <div className="bg-gray-900 p-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {shows.length > 0 ? (
          shows.map((show) => (
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
                <h5 className="text-sm font-semibold mt-2">{show.name}</h5>
                <p className="text-xs text-gray-400">{show.first_air_date.split('-')[0]}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-white">No shows available.</p>
        )}
      </div>
    </div>
  );
};

Shows.propTypes = {
  shows: PropTypes.array,
};

export default Shows;
