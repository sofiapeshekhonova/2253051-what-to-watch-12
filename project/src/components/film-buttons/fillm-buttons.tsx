import { Link } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
  children?: JSX.Element | false;
}

function FilmButtons({movie, children}: Props) {

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <Link to={`/player/${movie.id}`} className="btn--play__link">
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
      {children}
    </div>
  );
}

export default FilmButtons;
//мемо не влияет
