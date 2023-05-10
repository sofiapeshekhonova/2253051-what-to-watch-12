import { useAppSelector } from '../../hooks';
import Review from '../review/review';

function Reviews() {
  const reviews = useAppSelector((state) => state.review);
  const even = reviews.filter((rev)=> rev.id % 2 === 0);
  const odd = reviews.filter((rev)=> rev.id % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {odd.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {even.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </div>
    </div>
  );
}
export default Reviews;
