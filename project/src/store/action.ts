// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { MovieProps } from '../types/movie/movie';

export const changeGenre = createAction('changeGenre',
  (genre: string) => ({
    payload: genre,
  }));

export const loadMovies = createAction('data/loadMovies',
  (movies: MovieProps[]) => ({
    payload: movies,
  }));

export const setError = createAction('setError',
  (error: string | null) => ({
    payload: error
  }));

export const setLoadingStatus = createAction('data/loading',
  (isLoading: boolean) => ({
    payload: isLoading
  }));
