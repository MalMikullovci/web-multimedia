// App.js
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Banner from './components/Banner'; // Import the Banner component
import { apiKey, apiUrl } from './config';
import React, { useState, useEffect } from 'react';
import MySwiper from './components/slider';
function App() {
  const [movies, setMovies] = useState([]);

   useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results); // Assuming the API response has a 'results' array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <MySwiper />
      <Banner movies={movies} />
      <Footer />
    </>
  );
}

export default App;
