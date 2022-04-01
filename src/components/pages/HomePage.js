import { fetchPopularFilms } from 'components/API/ApiFilms';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';

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
          <Link to={`/movies/${film.id}`} key={film.id}>
            <li key={film.id}>{film.original_title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

// export { HomePage };

// export const HomePage = () => {
//   const [films, setFilms] = useState([]);
