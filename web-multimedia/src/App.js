import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PixiCursor from './components/PixiCursor';
import Preloader from './components/Preloader';
import BackgroundAudio from './components/BackgroundAudio';


// Lazy load components
const Banner = lazy(() => import('./components/Banner'));
const MovieDetails = lazy(() => import('./components/movieDetails'));
const ShowDetails = lazy(() => import('./components/showDetails'));
const MySwiper = lazy(() => import('./components/slider'));
const Shows = lazy(() => import('./components/Shows'));
const Pagination = lazy(() => import('./components/Pagination'));
const AboutPage = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));
const EpisodeDetails = lazy(() => import('./components/episodeDetails'));
const TrailerPage = lazy(() => import('./components/trailer'));

// Import Movies and TVShows components
const Movies = lazy(() => import('./components/Movies'));
const TVShows = lazy(() => import('./components/TVShows'));

function App() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=${moviePage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [moviePage]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setShows(data.results);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <div className="app-container min-h-screen flex flex-col">
   <BackgroundAudio />

        <PixiCursor />
        {loading && <Preloader />}
        {!loading && (
          <>
            <Navbar />
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <MySwiper movies={movies} />
                      <Banner movies={movies.slice((moviePage - 1) * 24, moviePage * 24)} />
                      <div className="bg-gray-900 p-4 rounded-md">
                        <Pagination
                          page={moviePage}
                          setPage={setMoviePage}
                          totalItems={movies.length}
                          itemsPerPage={24}
                        />
                      </div>
                    </>
                  }
                />
                <Route path="/movies" element={<Movies movies={movies} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/tv-shows" element={<TVShows shows={shows} />} />
                <Route path="/show/:id" element={<ShowDetails />} />
                <Route path="/aboutus" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/show/:showId/season/:seasonNumber/episode/:episodeNumber" element={<EpisodeDetails />} />
                <Route path="/trailers" element={<TrailerPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
