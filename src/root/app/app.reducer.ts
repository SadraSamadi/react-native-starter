import {createReducer} from '@reduxjs/toolkit';
import {appInitFailure, appInitRequest, appInitSuccess} from './app.action';
import {AppState} from './app.model';

export const appReducer = createReducer<AppState>(
  {
    ready: null
  },
  builder => builder
    .addCase(appInitRequest, state => {
      state.ready = null;
    })
    .addCase(appInitSuccess, state => {
      state.ready = true;
    })
    .addCase(appInitFailure, state => {
      state.ready = false;
    })
);
