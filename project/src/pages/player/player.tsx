import { useNavigate, useParams } from 'react-router-dom';
import { MovieProps } from '../../types/movie/movie';
import { useEffect, useRef, useState } from 'react';
import formatTime from '../../untils/untils';
type Props = {
  movies: MovieProps[];
}

function Player({ movies }: Props): JSX.Element {
  const navigate = useNavigate();
  const ref = useRef<HTMLVideoElement>(null);
  const movieId = Number(useParams().id);
  const movie: MovieProps | undefined = movies.find((element) => element.id === movieId);
  const [playMovie, setIsPlayMovie] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
      setIsPlayMovie(true);
    }
  }, []);

  if (movie === undefined) {
    return <p>Видео не найдено</p>;
  }

  function handleExit() {
    navigate(-1);
  }

  function stopVideo() {
    if (playMovie) {
      ref.current?.pause();
      setIsPlayMovie(false);
    } else {
      ref.current?.play();
      setIsPlayMovie(true);
    }
  }
  function findTime() {
    if(ref.current) {
      setTimeLeft(Math.floor(ref.current.duration - ref.current.currentTime));
    }
  }


  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster={movie.backgroundImage} ref={ref} onTimeUpdate={findTime}></video>
      <button type="button" className="player__exit" onClick={handleExit}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={stopVideo}>
            {playMovie ?
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </> :
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>}
          </button>

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
