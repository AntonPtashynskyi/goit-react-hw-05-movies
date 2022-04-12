import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastDetails } from 'components/API/ApiFilms';

import defaultSrc from '../../images/default-movie.png';

const imageSrc = 'https://image.tmdb.org/t/p/w500';

const CastPage = () => {
  const [casts, setCasts] = useState();
  const { slug } = useParams();
  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchCastDetails(movieId).then(d => setCasts(d.cast));
  }, [movieId]);

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '0',
        }}
      >
        {casts &&
          casts.map(cast => (
            <li
              key={cast.id}
              style={{
                border: '1px solid black',
                listStyle: 'none',
                width: '200px',
              }}
            >
              <img
                src={`${imageSrc}${cast.profile_path}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = `${defaultSrc}`;
                }}
                alt={cast.name}
                width="200"
              />
              <p>
                Name: <span style={{ fontWeight: 'bold' }}>{cast.name}</span>
              </p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { CastPage };
