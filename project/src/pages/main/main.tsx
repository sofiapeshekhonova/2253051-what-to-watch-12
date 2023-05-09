import FilmCard from '../../components/film-card/film-card';
import { MovieProps } from '../../types/movie/movie';
import FilmList from '../../components/films-list/films-list';
import GenreList from '../../components/genres-list/genres-list';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';

type Props = {
  promoMovie: MovieProps;
}

function Main({ promoMovie }: Props): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);
  const sortMovies = movies.filter((movie) => movie.genre === selectedGenre);
  const genres = ['All genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <main >
      <FilmCard promoMovie={promoMovie} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList handleChangeGenre={handleChangeGenre} genres={genres} />
          <div className="catalog__films-list">
            <FilmList movies={selectedGenre !== 'All genres' ? sortMovies : movies} />
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default Main;
