import GenreItem from '../genres-item/genres-item';

type Props = {
  handleChangeGenre: (genre: string) => void;
  genres: string[];
}

function GenreList({handleChangeGenre, genres}: Props) {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem genre={genre} key={genre} handleChangeGenre={handleChangeGenre}/>
      ))}
    </ul>
  );
}

export default GenreList;
