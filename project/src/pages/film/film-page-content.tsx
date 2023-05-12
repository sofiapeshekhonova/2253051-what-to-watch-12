import Footer from '../../components/footer/footer';
import MoreLikeThis from '../../components/more-like-films/more-like-films';

function FilmPageContent(): JSX.Element {
  return (
    <div className="page-content">
      <MoreLikeThis />
      <Footer />
    </div>
  );
}

export default FilmPageContent;
