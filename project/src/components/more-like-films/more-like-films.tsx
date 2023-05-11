import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getSimilarMovieStatus, getSimilarMovies } from '../../store/film/selectors';
import Movie from '../movie/Movie';


function MoreLikeThis() {
  const movies = useAppSelector(getSimilarMovies);
  const moviesStatus = useAppSelector(getSimilarMovieStatus);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {moviesStatus === 'Loading' ? <LoadingScreen /> :
        <div className="catalog__films-list">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>}
    </section>
  );
}

export default MoreLikeThis;
