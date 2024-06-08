import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fav1Poster from "../images/civil-war.webp";
import fav2Poster from "../images/betmeni.webp";
import fav3Poster from "../images/2001.webp";
import fav4Poster from "../images/arrival.webp";
import fav5Poster from "../images/donnie.webp";
import fav6Poster from "../images/dun2.webp";
import fav7Poster from "../images/godzilla.webp";
import fav8Poster from "../images/pulp.webp";
import fav9Poster from "../images/godzilla2.webp";
import fav10Poster from "../images/inception.webp";
import fav11Poster from "../images/gravity.webp";
import fav12Poster from "../images/mamunat.webp";
import fav13Poster from "../images/maxi-i-terbuar.webp";
import fav14Poster from "../images/matriksi.webp";
import fav15Poster from "../images/ryangoslingi.webp";
import "./banner.css";
import { Helmet } from 'react-helmet';

const favoriteMovies = [
  {
    id: "929590",
    title: "Civil war",
    poster_path: fav1Poster,
    release_date: "2023-01-01",
    runtime: 120,
  },
  {
    id: "414906",
    title: "The Batman",
    poster_path: fav2Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "62",
    title: "2001:a Space Oddysey",
    poster_path: fav3Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "329865",
    title: "Arrival",
    poster_path: fav4Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "141",
    title: "Donnie Darko",
    poster_path: fav5Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "693134",
    title: "Dune 2 ",
    poster_path: fav6Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "823464",
    title: "Godzilla x Kong",
    poster_path: fav7Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "680",
    title: "Pulp Fiction",
    poster_path: fav8Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "940721",
    title: "Godzilla:Minus One",
    poster_path: fav9Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "27205",
    title: "Inception",
    poster_path: fav10Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "49047",
    title: "Gravity",
    poster_path: fav11Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "653346",
    title: "Kingdom of the Planet of the Apes",
    poster_path: fav12Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "786892",
    title: "Furiosa",
    poster_path: fav13Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "603",
    title: "The Matrix",
    poster_path: fav14Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  {
    id: "746036",
    title: "The Fall Guy",
    poster_path: fav15Poster,
    release_date: "2022-01-01",
    runtime: 130,
  },
  // Add more favorite movies here...
];


const Banner = ({ movies = [] }) => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const observer = useRef();
  const lastMovieElementRef = useRef();

  useEffect(() => {
    setDisplayedMovies(movies.slice(0, 5));
  }, [movies]);

  const fetchMoreMovies = useCallback(() => {
    setDisplayedMovies((prevMovies) => {
      const newMovies = movies.slice(prevMovies.length, prevMovies.length + 10);
      return [...prevMovies, ...newMovies];
    });
  }, [movies]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if (entries[0].isIntersecting) fetchMoreMovies();
    };

    observer.current = new IntersectionObserver(callback);

    if (lastMovieElementRef.current) {
      observer.current.observe(lastMovieElementRef.current);
    }

    return () => observer.current.disconnect();
  }, [fetchMoreMovies]);


  return (
    <>
      <Helmet>
        <link rel="preload" href={fav1Poster} as="image" />
        <link rel="preload" href={fav2Poster} as="image" />
        <link rel="preload" href={fav3Poster} as="image" />
        <link rel="preload" href={fav4Poster} as="image" />
        <link rel="preload" href={fav5Poster} as="image" />
        <link rel="preload" href={fav6Poster} as="image" />
        <link rel="preload" href={fav7Poster} as="image" />
        <link rel="preload" href={fav8Poster} as="image" />
        <link rel="preload" href={fav9Poster} as="image" />
        <link rel="preload" href={fav10Poster} as="image" />
        <link rel="preload" href={fav11Poster} as="image" />
        <link rel="preload" href={fav12Poster} as="image" />
        <link rel="preload" href={fav13Poster} as="image" />
        <link rel="preload" href={fav14Poster} as="image" />
        <link rel="preload" href={fav15Poster} as="image" />
        <link rel="preconnect" href="https://image.tmdb.org" />

      </Helmet>
      <div className="bg-gray-900 p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular Movies</h2>
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Favorite Movies</h3>
          <TransitionGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {favoriteMovies.map((movie) => (
              <CSSTransition key={movie.id} timeout={300} classNames="fade">
                <Link to={`/movie/${movie.id}`} className="relative group text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 border-none">
                  <div className="relative pb-[150%] overflow-hidden bg-gray-900 rounded-lg border-none">
                    <img
                      className="absolute h-full w-full object-cover transition duration-300 group-hover:opacity-50 rounded-lg border-none"
                      src={movie.poster_path}
                      alt={`${movie.title} Poster`}
                      width="300"
                      height="450"
                      loading="lazy"
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
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Movies</h3>
          <TransitionGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {displayedMovies.map((movie, index) => (
              <CSSTransition key={movie.id} timeout={300} classNames="fade">
                <Link
                  to={`/movie/${movie.id}`}
                  ref={displayedMovies.length === index + 1 ? lastMovieElementRef : null}
                  className="relative group text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 border-none"
                >
                  <div className="relative pb-[150%] overflow-hidden bg-gray-900 rounded-lg border-none">
                    <img
                      className="absolute h-full w-full object-cover transition duration-300 group-hover:opacity-50 rounded-lg border-none"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                      width="300"
                      height="450"
                      loading="lazy"
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
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      runtime: PropTypes.number,
    })
  ),
};

export default Banner;