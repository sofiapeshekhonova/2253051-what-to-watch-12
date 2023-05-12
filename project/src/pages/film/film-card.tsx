import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import { AuthorizationStatus, Status } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveMovieAction, fetchSimilarMoviesAction, getMovieReview } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { getActiveMovie, getActiveMovieStatus } from '../../store/film/selectors';
import FilmButtons from '../../components/film-buttons/fillm-buttons';
import FilmInfo from '../../components/film-info/film-info';

function FilmCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const movieId = Number(useParams().id);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const movieStatus = useAppSelector(getActiveMovieStatus);
  const movie = useAppSelector(getActiveMovie);

  useEffect(() => {
    dispatch(getMovieReview(movieId));
    dispatch(fetchActiveMovieAction(movieId));
    dispatch(fetchSimilarMoviesAction(movieId));
  }, [movieId, dispatch]);

  if (movie === null || movieStatus === Status.Idle || movieStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full" style={{ background: movie.backgroundColor }}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{movie.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{movie.genre}</span>
              <span className="film-card__year">{movie.released}</span>
            </p>
            <FilmButtons movie={movie}>
              {authorizationStatus === AuthorizationStatus.Auth &&
                <Link to={`/films/${movie.id}/review`} className="btn film-card__button">
                  Add review
                </Link>}
            </FilmButtons>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
          </div>
          <FilmInfo movie={movie} />
        </div>
      </div>
    </section>

  );
}

export default FilmCard;
