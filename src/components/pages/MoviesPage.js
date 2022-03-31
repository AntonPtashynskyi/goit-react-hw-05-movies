import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

import { fetchSearchMovies } from 'components/API/ApiFilms';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchMovies(searchQuery).then(d => setSearchFilms(d));
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchQuery(e.target.filmQuery.value);
  };

  return (
    <div className="body-container">
      <form onSubmit={handleSubmit}>
        <label>
          Search film:
          <input name="filmQuery" />
        </label>
        <button type="submit">Find</button>
      </form>
      <div>
        <ul>
          {searchFilms &&
            searchFilms.map(f => (
              <li key={f.id}>
                <Link to={`/movies/${f.id}`}>{f.original_title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export { MoviesPage };
