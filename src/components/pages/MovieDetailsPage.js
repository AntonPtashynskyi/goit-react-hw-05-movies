import { NavLink, useParams, useNavigate } from 'react-router-dom';
import '../../index.css';

import { fetchFilmsDetails } from 'components/API/ApiFilms';
import { useState, useEffect } from 'react';

const imageSrc = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchFilmsDetails(movieId).then(movie => setFilm(movie));
  }, [movieId]);

  return (
    <div className="body-container">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      {film && (
        <div>
          <img
            alt={film.title}
            src={`${imageSrc}${film.poster_path}`}
            width={300}
          />
          <h2>{film.original_title}</h2>
          <p>
            Vote <b>{film.vote_average}</b>{' '}
          </p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h4>Genres</h4>
          {film.genres.map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}

          <div>
            <h5>Additional Information</h5>
            {/* <NavLink></NavLink> */}
            {/* <NavLink></NavLink> */}
          </div>
        </div>
      )}
    </div>
  );
};

export { MovieDetailsPage };
