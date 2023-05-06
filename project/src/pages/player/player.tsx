import { useParams } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';

type Props = {
  movies: MovieProps[];
}

function Player({movies}: Props): JSX.Element {
  const movieId = Number(useParams().id);
  const movie: MovieProps | undefined = movies.find((element) => element.id === movieId);

  if (movie === undefined) {
    return <p>Видео не найдено</p>;
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster={movie.posterImage}></video>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{movie.runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>

          {/* ecли пауза
           <button type="button" class="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlink:href="#pause"></use>
            </svg>
            <span>Pause</span>
          </button> */}

          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;