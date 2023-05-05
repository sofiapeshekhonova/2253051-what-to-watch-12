import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
}

function Movie({movie}: Props): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={movie.posterImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">{movie.name}</Link>
      </h3>
    </article>
  );
}

export default Movie;
