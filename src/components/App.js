import { NavigationPages } from './pages/NavigationPages';
import { Routes, Route } from 'react-router-dom';

import { Container } from './container/Container';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { CastPage } from './pages/CastPage';
import { ReviewPage } from './pages/ReviewsPage';

const App = () => {
  return (
    <>
      <Container mainStyle="container header">
        <NavigationPages />
      </Container>
      <Container mainStyle="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="review" element={<ReviewPage />} />
          </Route>

          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Container>
    </>
  );
};
export { App };
