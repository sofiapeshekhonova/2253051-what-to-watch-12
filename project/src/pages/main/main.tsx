import FilmCard from '../../components/film-card/film-card';
import FilmList from '../../components/films-list/films-list';
import GenreList from '../../components/genres-list/genres-list';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMore from '../../components/show-more/show-more';
import { useState } from 'react';
import { getMovies, getStatus } from '../../store/movies/selectors';
import { getGenre } from '../../store/app/selectors';
import { changeGenre } from '../../store/app/app';
import LoadingScreen from '../loading-screen/loading-screen';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [countCards, setCountCards] = useState(8);
  const selectedGenre = useAppSelector(getGenre);
  const isLoading = useAppSelector(getStatus);
  let movies = useAppSelector(getMovies);
  const sortMovies = movies.filter((movie) => movie.genre === selectedGenre);
  const genres = ['All genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  if (selectedGenre !== 'All genres') {
    movies = sortMovies;
  }

  const handleMoreFilmsShow = () => {
    if (movies.length !== 0) {
      setCountCards(countCards + 8);
    }
  };

  return (
    <main >
      {isLoading === 'Loading' ? <LoadingScreen /> : <FilmCard />}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList handleChangeGenre={handleChangeGenre} genres={genres} />
          {isLoading === 'Loading' ? <LoadingScreen /> :
            <div className="catalog__films-list">
              <FilmList movies={movies} countCards={countCards} />
            </div>}
          <ShowMore handleMoreFilmsShow={handleMoreFilmsShow} movies={movies} countCards={countCards} />
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default Main;
