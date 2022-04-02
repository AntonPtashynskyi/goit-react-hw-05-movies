import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../index.css';

import { fetchSearchMovies } from 'components/API/ApiFilms';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const [search, setSearch] = useState(postQuery);

  useEffect(() => {
    if (!postQuery) {
      setSearchFilms([]);
      setSearch('');
    }

    if (postQuery) {
      fetchSearchMovies(postQuery, page).then(data =>
        setSearchFilms(prevItem => [...prevItem, ...data])
      );
    }
  }, [page, postQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.filmQuery.value;
    setSearch(query);
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
        {searchFilms.length > 0 ? (
          <button onClick={() => setPage(page => page + 1)}>Load more</button>
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
};

export { MoviesPage };