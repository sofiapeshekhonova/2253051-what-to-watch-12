
type Props = {
  genre: string;
}
function GenreItem({ genre }: Props) {
  return (
    <li className="catalog__genres-item ">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreItem;

//catalog__genres-item--active - когда страница активная
