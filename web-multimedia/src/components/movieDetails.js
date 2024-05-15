import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [budget, setBudget] = useState(null);
  const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieData = await response.json();

        // Fetch movie credits to get director and cast information
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4602c2c330d0e8a431a05eada3f7380`);
        if (!creditsResponse.ok) {
          throw new Error(`HTTP error! status: ${creditsResponse.status}`);
        }
        const creditsData = await creditsResponse.json();

        // Extract director from credits data
        const director = creditsData.crew.find(member => member.job === "Director");

        // Extract top 6 cast members' names
        const cast = creditsData.cast.slice(0, 6).map(member => member.name);

        // Set movie data with director and cast information
        setMovie({
          ...movieData,
          director: director ? director.name : "Unknown",
          cast: cast.join(', ') // Joining cast names into a comma-separated string
        });

        // Fetch similar movies
        const similarResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!similarResponse.ok) {
          throw new Error(`HTTP error! status: ${similarResponse.status}`);
        }
        const similarData = await similarResponse.json();
        setSimilarMovies(similarData.results.slice(0, 4)); // Limit to 4 similar movies

        // Fetch movie details again to get budget and revenue
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&append_to_response=budget,revenue`);
        if (!detailsResponse.ok) {
          throw new Error(`HTTP error! status: ${detailsResponse.status}`);
        }
        const detailsData = await detailsResponse.json();
        setBudget(detailsData.budget);
        setRevenue(detailsData.revenue);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <div className="md:ml-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p className="mt-2 text-lg"><span className="bg-blue-600 px-2 py-1 rounded-md">HD</span> ⭐{movie.vote_average} {movie.release_date.split('-')[0]} {movie.runtime} min</p>
          <p className="mt-4">{movie.overview}</p>
          <div className="mt-4">
            <p><strong>Type:</strong> {movie.media_type}</p>
            <p><strong>Genre:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
            <p><strong>Release:</strong> {movie.release_date}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            <p><strong>Tags:</strong> {movie.tagline}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Revenue:</strong> ${revenue}</p>
          </div>
 
        </div>
      </div>
      <div className="mt-4">
            <h3 className="text-xl font-bold">Similar Movies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarMovies.map(similarMovie => (
                <div key={similarMovie.id} className="flex flex-col items-center">
                  <img
                    className="w-32 h-48 object-cover rounded-md shadow-md"
                    src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                    alt={`${similarMovie.title} Poster`}
                  />
                  <p className="mt-2 text-lg text-center">{similarMovie.title}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
    
  );
};

export default MovieDetails;
