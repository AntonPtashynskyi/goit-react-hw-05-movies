import slugify from 'slugify';
import { fetchPopularFilms } from 'components/API/ApiFilms';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';

const makeSlug = string => slugify(string, { lower: true });

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms().then(data => setFilms(data));
  }, []);

  return (
    <div className="body-container">
      <h2>Popular film</h2>
      <ul>
        {films.map(film => (
          <Link
            to={`/movies/${makeSlug(`${film.original_title} ${film.id}`)}`}
            key={film.id}
          >
            <li key={film.id}>
              {film.original_title} <br />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { makeSlug };
