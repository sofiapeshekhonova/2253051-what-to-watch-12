import { movies } from '../mocks/mocks';
import Movie from '../movie/Movie';

type Props = {
  genre: string;
  id: number;
}

function MoreLikeThis({genre, id}: Props) {

  const sortMovies = movies.filter((movie) => movie.genre === genre && movie.id !== id).slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {sortMovies.map((movie) => (
          <Movie movie={movie} key={movie.id}/>
        ))}
      </div>
    </section>
  );
}

export default MoreLikeThis;
