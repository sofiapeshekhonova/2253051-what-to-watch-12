import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
type Props = {
  name: string;
  setActiveLink: (tab: string) => void;
  activeLink: string;
}

function FilmNav({ name, setActiveLink, activeLink }: Props) {

  function handeleClick(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setActiveLink(name);
  }

  let className = '';
  activeLink === name ? className = 'film-nav__item film-nav__item--active' : className = 'film-nav__item';

  return (
    <li className={className} onClick={handeleClick}>
      <Link to="#" className="film-nav__link">{name}</Link>
    </li>
  );
}

export default FilmNav;
