import {createReducer} from '@reduxjs/toolkit';
//import { movies } from '../components/mocks/mocks';
import { MovieProps } from '../types/movie/movie';
import { changeGenre, getPromoMovie, getReviews, getUserInformation, loadMovies, postReview, requireAuthorization, setLoadingStatus } from './action';
import { AuthorizationStatus } from '../constants';
import { UserData } from '../types/user/user';
import { ReviewProps } from '../types/review/review';

type InitialState = {
  genre: string;
  movies: MovieProps[];
  isLoading: boolean;
  authorizationStatus: string;
  userInformation: null | UserData;
  review: ReviewProps[];
  movie: MovieProps | null;
};

// Объект начального состояния жанр (используется для фильтров по жанру)
//и список фильмов.
const defaultState: InitialState = {
  genre:'All genres',
  movies: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInformation: null,
  review: [],
  movie: null
};

const reducer = createReducer(defaultState, (builder) => {
  builder // addCase. Первым аргументом он ожидает функцию, с помощью которой создаётся действие.
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(getPromoMovie, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserInformation, (state, action) => {
      state.userInformation = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.review = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.review = action.payload;
    });
});

export { reducer };
