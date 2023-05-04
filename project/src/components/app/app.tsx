import Main from '../../pages/main/main';
import {movies, promoMovie} from '../../components/mocks/mocks';
// import AddReview from '../../pages/add-review/add-review';
// import Player from '../../pages/player/player';
// import MyList from '../../pages/my-list/my-list';
// import Film from '../../pages/film/film';
// import SignIn from '../../pages/sign-in/sign-in';

function App(): JSX.Element {
  return (
    <>
      <Main movies={movies} promoMovie={promoMovie}/>
      {/* <AddReview /> */}
      {/* <Player /> */}
      {/* <MyList /> */}
      {/* <Film /> */}
      {/* <SignIn /> */}
    </>
  );
}

export default App;
