export const GENRES: string[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  MyList = '/mylist',
  NotFoundPage = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
