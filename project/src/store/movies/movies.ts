import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchMoviesAction, fetchPromoMovieAction } from '../api-actions';
import { MovieProps } from '../../types/movie/movie';


type InitialState = {
  movies: MovieProps[];
  movie: MovieProps | null;
  status: Status;
};

const initialState: InitialState = {
  movies: [],
  movie: null,
  status: Status.Idle,
};


export const moviesProcess = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state, action) => {
        state.status = Status.Loading;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesAction.rejected, (state, action) => {
        state.status = Status.Failed;
      })
      .addCase(fetchPromoMovieAction.pending, (state, action) => {
        state.status = Status.Loading;
      })
      .addCase(fetchPromoMovieAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchPromoMovieAction.rejected, (state, action) => {
        state.status = Status.Failed;
      });
  }
});

