import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../../pages/main/main';
import { movies, promoMovie } from '../../components/mocks/mocks';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../ProtectedRoute/ProtectedRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main movies={movies} promoMovie={promoMovie} />}
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Review} element={<AddReview />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
