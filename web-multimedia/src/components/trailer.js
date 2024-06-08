import React from 'react';
import fav1Poster from '../images/civil-war.webp';
import fav2Poster from '../images/betmeni.webp';
import fav3Poster from '../images/2001.webp';
import fav4Poster from '../images/arrival.webp';
import fav5Poster from '../images/donnie.webp';
import fav6Poster from '../images/dun2.webp';
import fav7Poster from '../images/godzilla.webp';
import fav8Poster from '../images/pulp.webp';
import fav9Poster from '../images/godzilla2.webp';
import fav10Poster from '../images/inception.webp';
import fav11Poster from '../images/gravity.webp';
import fav12Poster from '../images/mamunat.webp';
import fav13Poster from '../images/maxi-i-terbuar.webp';
import fav14Poster from '../images/matriksi.webp';
import fav15Poster from '../images/ryangoslingi.webp';

const trailers = [
    {
        id: '929590',
        title: 'Civil war',
        poster_path: fav1Poster,
        release_date: '2023-01-01',
        trailer_path: "/videos/Civil War ｜ Official Trailer HD ｜ A24.mp4",
        runtime: 120,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '414906',
        title: 'The Batman',
        poster_path: fav2Poster,
        release_date: '2022-01-01',
        trailer_path: "/videos/THE BATMAN – Main Trailer.mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '62',
        title: '2001: A Space Odyssey',
        poster_path: fav3Poster,
        release_date: '1968-04-03',
        trailer_path: "/videos/2001： A SPACE ODYSSEY - Trailer.mp4",
        runtime: 142,
        genres: [
          { id: 878, name: 'Science Fiction' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '329865',
        title: 'Arrival',
        poster_path: fav4Poster,
        release_date: '2016-11-10',
        trailer_path: "http://localhost:3000/videos/Arrival%20Trailer%20(2016)%20-%20Paramount%20Pictures.mp4",
        runtime: 116,
        genres: [
            { id: 18, name: 'Drama' },
            { id: 878, name: 'Science Fiction' },
        ],
    },
    
      {
        id: '141',
        title: 'Donnie Darko',
        poster_path: fav5Poster,
        release_date: '2001-01-19',
        trailer_path: "/videos/Donnie Darko - Official Trailer.mp4",
        runtime: 113,
        genres: [
          { id: 18, name: 'Drama' },
          { id: 878, name: 'Science Fiction' },
        ],
      },
      {
        id: '693134',
        title: 'Dune 2',
        poster_path: fav6Poster,
        release_date: '2022-01-01',
        trailer_path: "/videos/Dune： Part Two ｜ Official Trailer.mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '823464',
        title: 'Godzilla x Kong',
        poster_path: fav7Poster,
        release_date: '2022-01-01',
        trailer_path: "/videos/Godzilla x Kong ： The New Empire ｜ Official Trailer.mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '680',
        title: 'Pulp Fiction',
        poster_path: fav8Poster,
        release_date: '1994-09-10',
        trailer_path: "/videos/Pulp Fiction Official Trailer .mp4",
        runtime: 154,
        genres: [
          { id: 80, name: 'Crime' },
          { id: 53, name: 'Thriller' },
        ],
      },
      {
        id: '940721',
        title: 'Godzilla: Minus One',
        poster_path: fav9Poster,
        release_date: '2023-11-03',
        trailer_path: "/videos/GODZILLA MINUS ONE Official Trailer 2.mp4",
        runtime: 125,
        genres: [
          { id: 28, name: 'Action' },
          { id: 878, name: 'Science Fiction' },
        ],
      },
      
      {
        id: '49047',
        title: 'Gravity',
        poster_path: fav11Poster,
        release_date: '2013-09-27',
        trailer_path: "/videos/Gravity - Official Main Trailer [2K HD].mp4",
        runtime: 91,
        genres: [
          { id: 18, name: 'Drama' },
          { id: 878, name: 'Science Fiction' },
        ],
      },
      {
        id: '653346',
        title: 'Kingdom of the Planet of the Apes',
        poster_path: fav12Poster,
        release_date: '2024-01-01',
        trailer_path: "/videos/Kingdom of the Planet of the Apes ｜ Official Trailer.mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '786892',
        title: 'Furiosa',
        poster_path: fav13Poster,
        release_date: '2024-01-01',
        trailer_path: "/videos/FURIOSA ： A MAD MAX SAGA ｜ OFFICIAL TRAILER .mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
      {
        id: '27205',
        title: 'Inception',
        poster_path: fav10Poster,
        release_date: '2010-07-15',
        trailer_path: "/videos/Inception (2010) Official Trailer .mp4", // Updated file path
        runtime: 148,
        genres: [
          { id: 28, name: 'Action' },
          { id: 878, name: 'Science Fiction' },
        ],
    },
    {
        id: '603',
        title: 'The Matrix',
        poster_path: fav14Poster,
        release_date: '1999-03-31',
        trailer_path: "/videos/The Matrix (1999) Official Trailer .mp4",
        runtime: 136,
        genres: [
          { id: 28, name: 'Action' },
          { id: 878, name: 'Science Fiction' },
        ],
    },
      {
        id: '746036',
        title: 'The Fall Guy',
        poster_path: fav15Poster,
        release_date: '2024-01-01',
        trailer_path: "/videos/The Fall Guy ｜ Official Trailer.mp4",
        runtime: 130,
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      },
    ];

    const TrailerPage = () => {
      return (
        <div className="w-full bg-gray-900 py-8">
          <div className="w-full px-4">
            <h1 className="text-4xl font-extrabold mb-8 text-white text-center">Movie Trailers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trailers.map(trailer => (
                <div key={trailer.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <video controls className="w-full h-48 sm:h-64 md:h-48 lg:h-56 rounded-t-lg object-cover">
                    <source src={trailer.trailer_path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-200">{trailer.title}</h5>
                    <p className="text-sm text-gray-400">{new Date(trailer.release_date).toLocaleDateString()}</p>
                    <div className="flex flex-wrap mt-2">
                      {trailer.genres.map(genre => (
                        <span key={genre.id} className="text-xs text-gray-100 bg-gray-700 px-2 py-1 rounded-full mr-2 mb-2">{genre.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default TrailerPage;