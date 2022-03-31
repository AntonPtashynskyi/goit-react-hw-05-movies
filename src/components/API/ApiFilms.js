import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

const API_KEY = '2a16c6401fc5b60e749d1dab2b58b588';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchPopularFilms = async () => {
  try {
    return await fetch(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(r => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        return r.json();
      })
      .then(d => d.results);
  } catch (error) {
    console.log(error);
  }
};

const fetchSearchMovies = async (searchQuery = '') => {
  try {
    return await fetch(`
    ${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false
    `)
      .then(r => {
        if (!r.ok) {
          throw new Error(r.status);
        }

        return r.json();
      })
      .then(d => {
        console.log(d);
        return d.results;
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchFilmsDetails = async movieId => {
  try {
    return await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    });
  } catch (error) {}
};

const fetchCastDetails = async movieId => {
  try {
    return await fetch(
      `${BASE_URL}}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    ).then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchPopularFilms,
  fetchSearchMovies,
  fetchFilmsDetails,
  fetchCastDetails,
};
