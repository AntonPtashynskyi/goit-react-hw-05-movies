import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../index.css';

import { fetchSearchMovies } from 'components/API/ApiFilms';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const [search, setSearch] = useState(postQuery);

  useEffect(() => {
    if (postQuery) {
      fetchSearchMovies(postQuery).then(d => setSearchFilms(d));
    }
  }, [postQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.filmQuery.value;

    setSearchParams(postQuery);
    setSearchParams({ post: query });
  };

  return (
    <div className="body-container">
      <form onSubmit={handleSubmit}>
        <label>
          Search film:
          <input
            type="search"
            name="filmQuery"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
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
