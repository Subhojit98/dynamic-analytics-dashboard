import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import userReducer from '../features/usersSlice'
import analyticsReducer from '../features/analyticsSlice'
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
    allUsers: userReducer,
    usersAnalyticsData: analyticsReducer
}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export default store;