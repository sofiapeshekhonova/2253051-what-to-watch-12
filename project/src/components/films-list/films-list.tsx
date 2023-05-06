import { useState } from 'react';
import { MovieProps } from '../../types/movie/movie';
import Movie from '../movie/Movie';

type Props = {
  movies: MovieProps[];
}

function FilmList({movies}: Props): JSX.Element {
  const [, setActiveMovieCard] = useState<null | number>(null);

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} setActiveMovieCard={setActiveMovieCard}/>
      ))}
    </div>

  );
}

export default FilmList;
