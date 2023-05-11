import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchActiveMovieAction, fetchSimilarMoviesAction, getMovieReview, postMovieReview } from '../api-actions';
import { ReviewProps } from '../../types/review/review';
import { MovieProps } from '../../types/movie/movie';

type InitialState = {
  statusReviews: string;
  comments: ReviewProps[];
  comment: ReviewProps[];
  status: string;
  statusFilm: string;
  activeFilm: MovieProps | null;
  similarMovies: MovieProps[];
  statusSimilarMovies: string;
};

const initialState: InitialState = {
  statusReviews: Status.Idle,
  comments: [],
  comment: [],
  status: Status.Idle,
  statusFilm: Status.Idle,
  activeFilm: null,
  similarMovies: [],
  statusSimilarMovies: Status.Idle,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postMovieReview.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postMovieReview.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.comment = action.payload;
      })
      .addCase(postMovieReview.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(getMovieReview.pending, (state) => {
        state.statusReviews = Status.Loading;
      })
      .addCase(getMovieReview.fulfilled, (state, action) => {
        state.statusReviews = Status.Success;
        state.comments = action.payload;
      })
      .addCase(getMovieReview.rejected, (state) => {
        state.statusReviews = Status.Failed;
      })
      .addCase(fetchActiveMovieAction.pending, (state) => {
        state.statusFilm = Status.Loading;
      })
      .addCase(fetchActiveMovieAction.fulfilled, (state, action) => {
        state.activeFilm = action.payload;
        state.statusFilm = Status.Success;
      })
      .addCase(fetchActiveMovieAction.rejected, (state) => {
        state.statusFilm = Status.Failed;
      })
      .addCase(fetchSimilarMoviesAction.pending, (state, action) => {
        state.statusSimilarMovies = Status.Loading;
      })
      .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
        state.statusSimilarMovies = Status.Success;
      })
      .addCase(fetchSimilarMoviesAction.rejected, (state, action) => {
        state.statusSimilarMovies = Status.Failed;
      });
  }
});
