// App.js
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/Banner'; // Import the Banner component
import { apiKey, apiUrl } from './config';
import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Banner movies={movies} /> {/* Replace Slider with Banner */}
      </div>
      <Footer />
    </>
  );
}

export default App;
