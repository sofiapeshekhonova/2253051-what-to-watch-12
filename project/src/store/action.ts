// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';
import { MovieProps } from '../types/movie/movie';
import { UserData } from '../types/user/user';
import { AppRoute } from '../constants';
import { ReviewProps } from '../types/review/review';

export const changeGenre = createAction('changeGenre',
  (genre: string) => ({
    payload: genre,
  }));

export const loadMovies = createAction('data/loadMovies',
  (movies: MovieProps[]) => ({
    payload: movies,
  }));

export const getPromoMovie = createAction('data/getPromoMovie',
  (movie: MovieProps) => ({
    payload: movie,
  }));

export const setError = createAction('setError',
  (error: string | null) => ({
    payload: error
  }));

export const setLoadingStatus = createAction('data/loading',
  (isLoading: boolean) => ({
    payload: isLoading
  }));

export const requireAuthorization = createAction('user/requireAuthorization',
  (authorizationStatus: string) => ({
    payload: authorizationStatus,
  })
);

export const getUserInformation = createAction('user/userInformation',
  (userInformation: null | UserData) => ({
    payload: userInformation,
  })
);

export const redirectToRoute = createAction('data/redirectToRoute',
  (redirect: AppRoute) => ({ payload: redirect })
);

export const postReview = createAction('data/postReview',
  (review: ReviewProps[]) => ({ payload: review })
);

export const getReviews = createAction('data/getReviews',
  (review: ReviewProps[]) => ({ payload: review })
);
