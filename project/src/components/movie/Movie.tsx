import { Link } from 'react-router-dom';
//import { AppRoute } from '../../constants';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movie: MovieProps;
  setActiveMovieCard: (id: number | null) => void;
}

function Movie({movie, setActiveMovieCard}: Props): JSX.Element {
  const { id } = movie;
  const movieId = `/films/${id}`;

  function mouseOverHandler() {
    if (setActiveMovieCard !== undefined) {
      setActiveMovieCard(id);
    }
  }

  function mouseLeaveHandler() {
    if (setActiveMovieCard !== undefined) {
      setActiveMovieCard(null);
    }
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
      <div className="small-film-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={movieId} className="small-film-card__link">{movie.name}</Link>
      </h3>
    </article>
  );
}

export default Movie;
