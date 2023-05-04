import FilmCard from '../../components/film-card/film-card';
import { MovieProps } from '../../types/movie/movie';
import FilmList from '../../components/films-list/films-list';
import GenreList from '../../components/genres-list/genres-list';
import Footer from '../../components/footer/footer';

type Props = {
  movies: MovieProps[];
  promoMovie: MovieProps;
}

function Main({ movies, promoMovie }: Props): JSX.Element {
  return (
    <main >
      <FilmCard promoMovie={promoMovie} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <div className="catalog__films-list">
            <FilmList movies={movies} />
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
