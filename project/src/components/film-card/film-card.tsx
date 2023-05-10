import { Link } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';
import Header from '../header/header';
import './film-card.css';
type Props = {
  promoMovie: MovieProps;
}

function FilmCard({ promoMovie }: Props) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoMovie.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoMovie.genre}</span>
              <span className="film-card__year">{promoMovie.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <Link to={`/player/${promoMovie.id}`} className="btn--play__link">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
