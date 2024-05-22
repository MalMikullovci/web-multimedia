import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/Banner';
import MovieDetails from './components/movieDetails';
import ShowDetails from './components/showDetails';
import MySwiper from './components/slider';
import Shows from './components/Shows';
import Pagination from './components/Pagination';
import Movies from './components/Movies';
import './App.css';
import TVShows from './components/TVShows';
import AboutPage from './components/about';

function App() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [showPage, setShowPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let allMovies = [];
        for (let page = 1; page <= 5; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=${page}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          allMovies = allMovies.concat(data.results);
        }
        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        let allShows = [];
        for (let page = 1; page <= 3; page++) {
          const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=${page}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          allShows = allShows.concat(data.results);
        }
        setShows(allShows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <div className="app-container min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <MySwiper movies={movies} />
              <Banner movies={movies.slice((moviePage - 1) * 24, moviePage * 24)} />
              <div className="bg-gray-900 p-4 rounded-md">
                <Pagination page={moviePage} setPage={setMoviePage} totalItems={movies.length} itemsPerPage={24} />
              </div>
              <Shows shows={shows.slice((showPage - 1) * 24, showPage * 24)} />
              <div className="bg-gray-900 p-4 rounded-md">
                <Pagination page={showPage} setPage={setShowPage} totalItems={shows.length} itemsPerPage={24} />
              </div>
            </>
          } />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TVShows shows={shows} />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/aboutus" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
