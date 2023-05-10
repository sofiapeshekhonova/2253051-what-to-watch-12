import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { MovieProps } from '../../types/movie/movie';
import MoreLikeThis from '../../components/more-like-films/more-like-films';
import Overview from '../../components/overview/overview';
import { AuthorizationStatus, LINKS } from '../../constants';
import FilmNav from './film-nav';
import Reviews from '../../components/reviews/reviews';
import Details from '../../components/details/details';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMovieReview } from '../../store/api-actions';

type Props = {
  movies: MovieProps[];
}

function Film({ movies }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const movieId = Number(useParams().id);
  const movie: MovieProps | undefined = movies.find((element) => element.id === movieId);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [activeLink, setActiveLink] = useState('Overview');

  useEffect(()=> {
    dispatch(getMovieReview(movieId));
  },[]);

  // useEffect(() => {
  //   dispatch(getMovieReview(movieId));
  // }, [dispatch, movieId]);

  if (movie === undefined) {
    return <p>Информация по фильму не найдена</p>;
  }

  const movieInformation = () => {
    switch (activeLink) {
      case 'Overview':
        return <Overview movie={movie} />;
      case 'Details':
        return <Details movie={movie} />;
      case 'Reviews':
        return <Reviews />;
      default:
        return <Overview movie={movie} />;
    }
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={movie.backgroundImage}
              alt={movie.name}
            />
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

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`/player/${movie.id}`} className='btn--play__link'>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${movie.id}/review`} className="btn film-card__button">
                    Add review
                  </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={movie.posterImage}
                alt={movie.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {LINKS.map((li) => (
                    <FilmNav key={li.id} name={li.name} setActiveLink={setActiveLink} activeLink={activeLink} />
                  ))}
                </ul>
              </nav>
              {movieInformation()}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis genre={movie.genre} id={movie.id} movies={movies}/>
        <Footer />
      </div>
    </>
  );
}

export default Film;
