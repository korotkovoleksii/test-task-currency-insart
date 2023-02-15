import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';

const rootReducer = combineReducers({
    currency: currencyReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
