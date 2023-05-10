import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { getPromoMovie, getReviews, getUserInformation, loadMovies, postReview, requireAuthorization, setError, setLoadingStatus } from './action';
import { store } from './index';
import { MovieProps } from '../types/movie/movie.js';
import { APIRoute, AuthorizationStatus } from '../constants';
import { UserData } from '../types/user/user.js';
import { AuthData } from '../types/auth-data.js';
import { dropToken, saveToken } from '../services/token';
import { CommentType, ReviewProps } from '../types/review/review';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<MovieProps[]>(APIRoute.Movies);
    dispatch(setLoadingStatus(false));
    dispatch(loadMovies(data));
  },
);

export const fetchPromoMovieAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getPromoMovie',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<MovieProps>(APIRoute.Promo);
    dispatch(setLoadingStatus(false));
    dispatch(getPromoMovie(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserInformation(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(getUserInformation(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    //dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(getUserInformation(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      5000,
    );
  },
);

export const postMovieReview = createAsyncThunk<void, CommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReviews',
  async ({ movieId, rating, comment }, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.post<ReviewProps[]>(`${APIRoute.Comment}/${movieId}`, {rating, comment});
    dispatch(setLoadingStatus(false));
    dispatch(postReview(data));
  },
);

export const getMovieReview = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getReviews',
  async (movieId, {dispatch, extra: api}) => {
    //dispatch(setLoadingStatus(true));
    const {data} = await api.get<ReviewProps[]>(`${APIRoute.Comment}/${movieId}`);
    //dispatch(setLoadingStatus(false));
    dispatch(getReviews(data));
  },
);
