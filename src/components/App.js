import { NavigationPages } from './pages/NavigationPages';
import { Routes, Route } from 'react-router-dom';

import { Container } from './container/Container';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { NotFound } from './pages/NotFoundPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';

const App = () => {
  return (
    <>
      <Container title="Good">
        <NavigationPages />
      </Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { App };
