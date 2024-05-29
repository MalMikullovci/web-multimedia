// src/components/EpisodeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetails = () => {
  const { showId, seasonNumber, episodeNumber } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEpisode(data);
      } catch (error) {
        console.error('Error fetching episode details:', error);
      }
    };

    fetchEpisodeDetails();
  }, [showId, seasonNumber, episodeNumber]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-details bg-gray-900 text-white p-10">
      <div className="flex flex-col items-start">
        <img
          className="w-full md:w-1/2 rounded-lg shadow-md mb-6"
          src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
          alt={`${episode.name} Still`}
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400">{episode.name}</h2>
          <p className="mt-4 text-lg">{episode.overview}</p>
          <div className="mt-6 space-y-2">
            <p><strong>Air Date:</strong> {episode.air_date}</p>
            <p><strong>Episode Number:</strong> {episode.episode_number}</p>
            <p><strong>Season Number:</strong> {episode.season_number}</p>
            <p><strong>Rating:</strong> ⭐ {episode.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
