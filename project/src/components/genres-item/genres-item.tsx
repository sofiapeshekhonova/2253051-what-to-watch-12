import { MouseEvent } from 'react';

type Props = {
  genre: string;
  handleChangeGenre: (genre: string) => void;
}
function GenreItem({ genre, handleChangeGenre }: Props) {
  function handleClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    handleChangeGenre(genre);
  }
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link" onClick={handleClick}>{genre}</a>
    </li>
  );
}

export default GenreItem;

//catalog__genres-item--active - когда страница активная
