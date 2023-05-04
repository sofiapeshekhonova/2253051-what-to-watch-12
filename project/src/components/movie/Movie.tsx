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
        <a className="small-film-card__link" href="film-page.html">{movie.name}</a>
      </h3>
    </article>
  );
}

export default Movie;
