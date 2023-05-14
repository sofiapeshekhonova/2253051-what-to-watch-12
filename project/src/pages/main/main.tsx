import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

import { getStatus } from '../../store/movies/selectors';

import LoadingScreen from '../loading-screen/loading-screen';
import MoviesCatalog from '../../components/movies-catalog/movies-catalog';

function Main(): JSX.Element {
  const isLoading = useAppSelector(getStatus);

  return (
    <main >
      {isLoading === 'Loading' ? <LoadingScreen /> : <PromoFilmCard />}
      <div className="page-content">
        <MoviesCatalog />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
