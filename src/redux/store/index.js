import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import dataReducer from '../reducers/dataReducer';

export const store = configureStore({
  reducer: combineReducers({
    allDataReducer: dataReducer,
  }),
});
