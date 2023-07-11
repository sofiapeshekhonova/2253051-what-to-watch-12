import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction('data/redirectToRoute',
  (redirect: string) => ({ payload: redirect })
);
