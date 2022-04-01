import { Outlet, useParams, useNavigate, NavLink } from 'react-router-dom';
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
        style={{ marginBottom: '10px' }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      {film && (
        <div>
          <div
            style={{
              display: 'flex',
              maxWidth: '800px',
            }}
          >
            <div>
              <img
                alt={film.title}
                src={`${imageSrc}${film.poster_path}`}
                width={300}
              />
            </div>
            <div style={{ padding: '0px 20px' }}>
              <h2>{film.original_title}</h2>
              <p>
                Vote <b>{film.vote_average}</b>{' '}
              </p>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <h4>Genres</h4>
              <ul
                style={{
                  display: 'flex',
                  listStyle: 'none',
                  marginRight: '10px',
                  padding: '0',
                }}
              >
                {film.genres.map((genre, index) => (
                  <li
                    key={index}
                    style={{
                      marginRight: '10px',
                    }}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{}}>
            <h5>Additional Information</h5>
            <ul>
              <li key="cast">
                <NavLink to={'cast'} replace={true}>
                  Cast:
                </NavLink>
              </li>
              <li key="review">
                <NavLink to={'review'} replace={true}>
                  Review:
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export { MovieDetailsPage };
