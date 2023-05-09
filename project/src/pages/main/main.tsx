import FilmCard from '../../components/film-card/film-card';
import { MovieProps } from '../../types/movie/movie';
import FilmList from '../../components/films-list/films-list';
import GenreList from '../../components/genres-list/genres-list';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import ShowMore from '../../components/show-more/show-more';
import { useState } from 'react';

type Props = {
  promoMovie: MovieProps;
}

function Main({ promoMovie }: Props): JSX.Element {
  const [countCards, setCountCards] = useState(8);
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  let movies = useAppSelector((state) => state.movies);
  const sortMovies = movies.filter((movie) => movie.genre === selectedGenre);
  const genres = ['All genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  if(selectedGenre !== 'All genres'){
    movies = sortMovies;
  }

  const handleMoreFilmsShow = () => {
    if (movies.length !== 0) {
      setCountCards(countCards + 8);
    }
  };


  return (
    <main >
      <FilmCard promoMovie={promoMovie} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList handleChangeGenre={handleChangeGenre} genres={genres} />
          <div className="catalog__films-list">
            <FilmList movies={movies} countCards={countCards}/>
          </div>
          <ShowMore handleMoreFilmsShow={handleMoreFilmsShow} movies={movies} countCards={countCards}/>
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default Main;
