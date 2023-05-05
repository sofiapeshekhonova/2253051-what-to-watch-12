import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { callRating } from '../../constants';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movies: MovieProps[];
}

function Film({movies}: Props): JSX.Element {
  const movieId = Number(useParams().id);
  const movie: MovieProps | undefined = movies.find((element) => element.id === movieId);

  if (movie === undefined) {
    return <p>Информация по фильму не найдена</p>;
  }

  const movieRating = callRating(movie.rating);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={movie.backgroundImage}
              alt={movie.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${movie.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={movie.posterImage}
                alt={movie.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              {/*когда нажимайешь на спискок film-nav__list Overview*/}
              <div className="film-rating">
                <div className="film-rating__score">{movie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{movieRating}</span>
                  <span className="film-rating__count">{movie.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{movie.description} </p>
                <p className="film-card__director">
                  <strong>{movie.director}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>
                    Starring: {movie.starring.join(', ')}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Bohemian Rhapsody
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/macbeth.jpg"
                  alt="Macbeth"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Macbeth
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/aviator.jpg"
                  alt="Aviator"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Film;


//видимо когда нажимайешь на спискок film-nav__list Reviews
{/* <div className="film-card__reviews film-card__row">
<div className="film-card__reviews-col">
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed films in years.</p>

      <footer className="review__details">
        <cite className="review__author">Kate Muir</cite>
        <time className="review__date" datetime="2016-12-24">December 24, 2016</time>
      </footer>
    </blockquote>

    <div className="review__rating">8,9</div>
  </div>

  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

      <footer className="review__details">
        <cite className="review__author">Bill Goodykoontz</cite>
        <time className="review__date" datetime="2015-11-18">November 18, 2015</time>
      </footer>
    </blockquote>

    <div className="review__rating">8,0</div>
  </div>

  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.</p>

      <footer className="review__details">
        <cite className="review__author">Amanda Greever</cite>
        <time className="review__date" datetime="2015-11-18">November 18, 2015</time>
      </footer>
    </blockquote>

    <div className="review__rating">8,0</div>
  </div>
</div>
<div className="film-card__reviews-col">
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

      <footer className="review__details">
        <cite className="review__author">Matthew Lickona</cite>
        <time className="review__date" datetime="2016-12-20">December 20, 2016</time>
      </footer>
    </blockquote>

    <div className="review__rating">7,2</div>
  </div>

  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

      <footer className="review__details">
        <cite className="review__author">Paula Fleri-Soler</cite>
        <time className="review__date" datetime="2016-12-20">December 20, 2016</time>
      </footer>
    </blockquote>

    <div className="review__rating">7,6</div>
  </div>

  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

      <footer className="review__details">
        <cite className="review__author">Paula Fleri-Soler</cite>
        <time className="review__date" datetime="2016-12-20">December 20, 2016</time>
      </footer>
    </blockquote>

    <div className="review__rating">7,0</div>
  </div>
</div>
</div> */}


//видимо когда нажимайешь на спискок film-nav__list Details

{/* <div className="film-card__text film-card__row">
  <div className="film-card__text-col">
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Director</strong>
      <span className="film-card__details-value">Wes Anderson</span>
    </p>
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Starring</strong>
      <span className="film-card__details-value">
        Bill Murray, <br />
        Edward Norton, <br />
        Jude Law, <br/>
        Willem Dafoe, <br/>
        Saoirse Ronan, <br/>
        Tony Revoloru, <br/>
        Tilda Swinton, <br/>
        Tom Wilkinson, <br/>
        Owen Wilkinson, <br/>
        Adrien Brody, <br/>
        Ralph Fiennes, <br/>
        Jeff Goldblum
      </span>
    </p>
  </div>

  <div className="film-card__text-col">
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Run Time</strong>
      <span className="film-card__details-value">1h 39m</span>
    </p>
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Genre</strong>
      <span className="film-card__details-value">Comedy</span>
    </p>
    <p className="film-card__details-item">
      <strong className="film-card__details-name">Released</strong>
      <span className="film-card__details-value">2014</span>
    </p>
  </div>
</div> */}
