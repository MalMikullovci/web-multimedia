import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fav1Poster from '../images/civil-war.jpg';
import fav2Poster from '../images/betmeni.jpg';
import fav3Poster from '../images/2001.jpg';
import fav4Poster from '../images/arrival.jpg';
import fav5Poster from '../images/donnie.jpg';
import fav6Poster from '../images/dun2.jpg';
import fav7Poster from '../images/godzilla.jpg';
import fav8Poster from '../images/pulp.jpg';
import fav9Poster from '../images/godzilla2.jpg';
import fav10Poster from '../images/inception.jpg';
import fav11Poster from '../images/gravity.jpg';
import fav12Poster from '../images/mamunat.jpg';
import fav13Poster from '../images/maxi-i-terbuar.jpg';
import fav14Poster from '../images/matriksi.jpg';
import fav15Poster from '../images/ryangoslingi.jpg';
const favoriteMovies = [
  {
    id: '929590',
    title: 'Civil war',
    poster_path: fav1Poster,
    release_date: '2023-01-01',
    trailer_path: "../videos/Civil War ｜ Official Trailer HD ｜ A24.mp4",
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
    trailer_path: "../videos/THE BATMAN – Main Trailer.mp4",
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
    trailer_path: "../videos/2001： A SPACE ODYSSEY - Trailer.mp4",
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
    trailer_path: "../videos/Arrival Trailer (2016) - Paramount Pictures.mp4",
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
    trailer_path: "../videos/Donnie Darko - Official Trailer.mp4",
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
    trailer_path: "../videos/Dune： Part Two ｜ Official Trailer.mp4",
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
    trailer_path: "../videos/Godzilla x Kong ： The New Empire ｜ Official Trailer.mp4",
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
    trailer_path: "../videos/Pulp Fiction Official Trailer .mp4",
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
    trailer_path: "../videos/GODZILLA MINUS ONE Official Trailer 2.mp4",
    runtime: 125,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
    ],
  },
  {
    id: '27205',
    title: 'Inception',
    poster_path: fav10Poster,
    release_date: '2010-07-15',
    trailer_path: "../videos/Inception (2010) Official Trailer.mp4",
    runtime: 148,
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
    trailer_path: "../videos/Gravity - Official Main Trailer [2K HD].mp4",
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
    trailer_path: "../videos/Kingdom of the Planet of the Apes ｜ Official Trailer.mp4",
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
    trailer_path: "../videos/Kingdom of the Planet of the Apes ｜ Official Trailer.mp4",
    runtime: 130,
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
    ],
  },
  {
    id: '603',
    title: 'The Matrix',
    poster_path: fav14Poster,
    release_date: '1999-03-31',
    trailer_path: "../videos/The Matrix (1999) Official Trailer.mp4",
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
    trailer_path: "../videos/The Fall Guy ｜ Official Trailer.mp4",
    runtime: 130,
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
    ],
  },
];

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [budget, setBudget] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        let movieData;
        let favoriteMovie = favoriteMovies.find(favMovie => favMovie.id === id);

        if (favoriteMovie) {
          movieData = favoriteMovie;
          setTrailer(favoriteMovie.trailer_path);
        } else {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          movieData = await response.json();

          const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
          if (!videosResponse.ok) {
            throw new Error(`HTTP error! status: ${videosResponse.status}`);
          }
          const videosData = await videosResponse.json();
          const trailerData = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
          setTrailer(trailerData ? `https://www.youtube.com/embed/${trailerData.key}` : null);
        }

        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4602c2c330d0e8a431a05eada3f7380`);
        if (!creditsResponse.ok) {
          throw new Error(`HTTP error! status: ${creditsResponse.status}`);
        }
        const creditsData = await creditsResponse.json();

        const director = creditsData.crew.find(member => member.job === "Director");
        const cast = creditsData.cast.slice(0, 6).map(member => member.name);

        setMovie({
          ...movieData,
          director: director ? director.name : "Unknown",
          cast: cast.join(', '),
          media_type: "Movie"
        });

        const similarResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US&page=1`);
        if (!similarResponse.ok) {
          throw new Error(`HTTP error! status: ${similarResponse.status}`);
        }
        const similarData = await similarResponse.json();
        setSimilarMovies(similarData.results.slice(0, 8));

        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4602c2c330d0e8a431a05eada3f7380&language=en-US`);
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={movie.poster_path}
          alt={`${movie.title} Poster`}
        />
        <div className="md:ml-10 mt-6 md:mt-0 flex-1">
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <span className="bg-blue-600 px-2 py-1 rounded-md">HD</span>
            <span>⭐{movie.vote_average}</span>
            <span>{movie.release_date.split("-")[0]}</span>
            <span>{movie.runtime} min</span>
          </p>
          <p>{movie.tagline}</p>
          <p className="mt-4">{movie.overview}</p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Type:</strong> {movie.media_type}
            </p>
            <p>
              <strong>Genre:</strong>{" "}
              {movie.genres
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "Unknown"}
            </p>
            <p>
              <strong>Release:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Cast:</strong> {movie.cast}
            </p>
            <p>
              <strong>Budget:</strong>{" "}
              {budget ? formatCurrency(budget) : "Unknown"}
            </p>
            <p>
              <strong>Revenue:</strong>{" "}
              {revenue ? formatCurrency(revenue) : "Unknown"}
            </p>
          </div>

        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Similar Movies</h3>
        <Slider {...sliderSettings} className="my-slider">
          {similarMovies.map((similarMovie) => (
            <div key={similarMovie.id} className="px-2">
              <Link to={`/movie/${similarMovie.id}`}>
                <img
                  className="w-full h-auto rounded-lg shadow-md"
                  src={`https://image.tmdb.org/t/p/w500${similarMovie.backdrop_path}`}
                  alt={`${similarMovie.title} Poster`}
                />
              </Link>
              <h4 className="mt-2 text-lg font-bold">{similarMovie.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieDetails;