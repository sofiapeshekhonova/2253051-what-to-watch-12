import { NameSpace } from '../../constants';
import { MovieProps } from '../../types/movie/movie';
import { State } from '../../types/state';

export const getMovies = (state: State): MovieProps[] => state[NameSpace.Movies].movies;
export const getStatus = (state: State): string => state[NameSpace.Movies].status;
export const getPromoMovie = (state: State): MovieProps | null => state[NameSpace.Movies].movie;
