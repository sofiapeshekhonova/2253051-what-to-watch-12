import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import StarsInput from '../../components/stars-input/stars-input';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { STARS, Status } from '../../constants';
import './add-review.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveMovieAction, postMovieReview } from '../../store/api-actions';
import { getActiveMovie, getActiveMovieStatus, getReviewStatus } from '../../store/film/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const movieId = Number(useParams().id);

  useEffect(()=> {
    dispatch(fetchActiveMovieAction(movieId));
  },[movieId, dispatch]);

  const postStatus = useAppSelector(getReviewStatus);
  const movie = useAppSelector(getActiveMovie);
  const movieStatus = useAppSelector(getActiveMovieStatus);

  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    movieId
  });

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(postMovieReview(formData));
    setFormData({
      rating: 0,
      comment: '',
      movieId
    });
  }

  if (movie === null || movieStatus === Status.Idle || movieStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full" style={{background: movie.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {STARS.map((star) => (
                <StarsInput key={star.id} name={star.name} starId={star.id} value={formData.rating} onChange={handleChange} />
              ))}
            </div>
          </div>

          <div className="add-review__text" style={{background: 'rgb(255 255 255 / 26%)'}}>
            <textarea className="add-review__textarea" id="comment"
              name="comment" value={formData.comment}
              onChange={handleChange}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit"
                disabled={(formData.comment.length <= 50 ||
                  formData.rating === 0 || formData.comment.length >= 400 || postStatus === Status.Loading || postStatus === Status.Failed
                )}
              >{postStatus === Status.Loading ? 'Loading' : 'Post'}
              </button>
            </div>
          </div>
          <p className="reviews__description">
            To post review please make sure to set <b>rating </b>
            and describe the film with at least <b>50 characters</b>.
            {(formData.comment && formData.comment.length < 51) && <b> Сharacters left: {51 - formData.comment.length}</b>}
            {(formData.comment && formData.comment.length >= 400) && <b > Max 400 Сharacters</b>}
          </p>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
