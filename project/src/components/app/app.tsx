import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../../pages/main/main';
import { promoMovie } from '../../components/mocks/mocks';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const movies = useAppSelector((state) => state.movies);
  const isLoading = useAppSelector((state) => state.isLoading);
  if(isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main promoMovie={promoMovie} />}
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player movies={movies}/>} />
        <Route path={AppRoute.Review} element={<AddReview movies={movies}/>} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList movies={movies}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film movies={movies}/>} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
