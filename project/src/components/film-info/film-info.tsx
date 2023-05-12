import { useState } from 'react';
import { LINKS } from '../../constants';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { MovieProps } from '../../types/movie/movie';
import FilmNav from '../../pages/film/film-nav';

type Props = {
  movie: MovieProps;
}

function FilmInfo({ movie }: Props): JSX.Element {
  const [activeLink, setActiveLink] = useState('Overview');

  const movieInformation = () => {
    switch (activeLink) {
      case 'Overview':
        return <Overview movie={movie} />;
      case 'Details':
        return <Details movie={movie} />;
      case 'Reviews':
        return <Reviews />;
      default:
        return <Overview movie={movie} />;
    }
  };

  return (

    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {LINKS.map((li) => (
            <FilmNav key={li.id} name={li.name} setActiveLink={setActiveLink} activeLink={activeLink} />
          ))}
        </ul>
      </nav>
      {movieInformation()}
    </div>

  );
}

export default FilmInfo;
