// это файл хранилище - store - глобальное состояние приложения

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reduser';

export const store = configureStore({ reducer });
