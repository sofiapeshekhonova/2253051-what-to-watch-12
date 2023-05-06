import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { MovieProps } from '../../types/movie/movie';
import FilmList from '../../components/films-list/films-list';
type Props = {
  movies: MovieProps[];
}
function MyList({movies}: Props): JSX.Element {
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{movies.length}</span>
        </h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList movies={movies}/>
      </section>
      < Footer />
    </div>
  );
}

export default MyList;
