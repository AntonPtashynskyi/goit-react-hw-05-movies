import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { NavigationPages } from './pages/NavigationPages';
import { Container } from './container/Container';

import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { CastPage } from './pages/CastPage';
import { ReviewPage } from './pages/ReviewsPage';

// import { HomePage } from './pages/HomePage';
const HomePage = lazy(() => import('./pages/HomePage.js'));

const App = () => {
  return (
    <>
      <Container mainStyle="container header">
        <NavigationPages />
      </Container>
      <Container mainStyle="container">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="review" element={<ReviewPage />} />
            </Route>
            <Route path="/*" element={<Navigate to={'/'} replace={true} />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
export { App };
