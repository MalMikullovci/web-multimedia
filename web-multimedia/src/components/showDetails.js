import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [similarShows, setSimilarShows] = useState([]);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    const fetchSimilarShows = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSimilarShows(data.results.slice(0, 5)); // Limit similar shows to 5
      } catch (error) {
        console.error('Error fetching similar shows:', error);
      }
    };

    fetchShowDetails();
    fetchSimilarShows();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details bg-gray-900 text-white p-10">
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={`${show.name} Poster`}
        />
        <div className="md:ml-10 mt-6 md:mt-0 flex-1">
          <h2 className="text-3xl font-bold">{show.name}</h2>
          <p className="mt-2 text-lg">{show.overview}</p>
          <div className="mt-4 space-y-2">
            <p><strong>First Air Date:</strong> {show.first_air_date}</p>
            <p><strong>Number of Episodes:</strong> {show.number_of_episodes}</p>
            <p><strong>Number of Seasons:</strong> {show.number_of_seasons}</p>
            <p><strong>Average Rating:</strong> ⭐ {show.vote_average}</p>
            <p><strong>Genres:</strong> {show.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Similar Shows</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"> {/* Adjust grid to accommodate 5 items */}
          {similarShows.map(similarShow => (
            <div key={similarShow.id} className="flex flex-col items-center">
              <img
                className="w-32 h-48 object-cover rounded-md shadow-md"
                src={`https://image.tmdb.org/t/p/w500${similarShow.poster_path}`}
                alt={`${similarShow.name} Poster`}
              />
              <p className="mt-2 text-lg text-center">{similarShow.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Add more info here if needed */}
    </div>
  );
};

export default ShowDetails;
