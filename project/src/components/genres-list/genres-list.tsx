import { GENRES } from '../../constants';
import GenreItem from '../genres-item/genres-item';

function GenreList() {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <GenreItem genre={genre} key={genre}/>
      ))}
    </ul>
  );
}

export default GenreList;
