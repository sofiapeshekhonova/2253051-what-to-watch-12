import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { MovieProps } from '../types/movie/movie.js';
import { APIRoute, AppRoute} from '../constants';
import { UserData } from '../types/user/user.js';
import { AuthData } from '../types/auth-data.js';
import { dropToken, saveToken } from '../services/token';
import { CommentType, ReviewProps } from '../types/review/review';
import { redirectToRoute } from './action';

export const fetchMoviesAction = createAsyncThunk<MovieProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MovieProps[]>(APIRoute.Movies);
    return data;
  },
);

export const fetchActiveMovieAction = createAsyncThunk<MovieProps, number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchActiveMovie',
  async (movieId, {extra: api}) => {
    const {data} = await api.get<MovieProps>(`${APIRoute.Movies}/${movieId}`);
    return data;
  },
);

export const fetchSimilarMoviesAction = createAsyncThunk<MovieProps[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarMovies',
  async (movieId, {extra: api}) => {
    const {data} = await api.get<MovieProps[]>(`${APIRoute.Movies}/${movieId}/similar`);
    return data;
  },
);

export const fetchPromoMovieAction = createAsyncThunk<MovieProps, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/getPromoMovie',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MovieProps>(APIRoute.Promo);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

// export const clearErrorAction = createAsyncThunk(
//   'clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       5000,
//     );
//   },
// );

export const postMovieReview = createAsyncThunk<ReviewProps[], CommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReviews',
  async ({ movieId, rating, comment }, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewProps[]>(`${APIRoute.Comment}/${movieId}`, {rating, comment});
    dispatch(redirectToRoute(`films/${movieId}`));
    return data;
  },
);

export const getMovieReview = createAsyncThunk<ReviewProps[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/getReviews',
  async (movieId, {extra: api}) => {
    const {data} = await api.get<ReviewProps[]>(`${APIRoute.Comment}/${movieId}`);
    return data;
  },
);
