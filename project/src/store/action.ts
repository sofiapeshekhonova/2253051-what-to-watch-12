// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { MovieProps } from '../types/movie/movie';

export const changeGenre = createAction('changeGenre',
  (genre: string) => ({
    payload: genre,
  }));

export const changeMovies = createAction('changeMovies',
  (movies: MovieProps[]) => ({
    payload: movies,
  }));
