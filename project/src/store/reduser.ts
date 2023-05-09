import {createReducer} from '@reduxjs/toolkit';
import { movies } from '../components/mocks/mocks';
import { MovieProps } from '../types/movie/movie';
import { changeGenre, changeMovies } from './action';

type InitialState = {
  genre: string;
  movies: MovieProps[];
};

// Объект начального состояния жанр (используется для фильтров по жанру)
//и список фильмов.
const defaultState: InitialState = {
  genre:'All genres',
  movies: movies
};

const reducer = createReducer(defaultState, (builder) => {
  builder // addCase. Первым аргументом он ожидает функцию, с помощью которой создаётся действие.
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(changeMovies, (state, action) => {
      state.movies = action.payload;
    });
});

export { reducer };
