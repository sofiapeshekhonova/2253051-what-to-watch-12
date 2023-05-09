import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { loadMovies, setError, setLoadingStatus } from './action';
import { store } from './index';
import { MovieProps } from '../types/movie/movie.js';
import { APIRoute } from '../constants';

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

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      5000,
    );
  },
);
