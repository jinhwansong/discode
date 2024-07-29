import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore['dispatch'];

export default store;
