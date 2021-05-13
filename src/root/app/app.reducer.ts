import {createReducer} from '@reduxjs/toolkit';
import {status} from '../../core/core.util';
import {appInitFailure, appInitRequest, appInitSuccess} from './app.action';
import {AppState} from './app.model';

export const appReducer = createReducer<AppState>(
  {init: null},
  builder => builder
    .addCase(appInitRequest, status('init', 'request'))
    .addCase(appInitSuccess, status('init', 'success'))
    .addCase(appInitFailure, status('init', 'failure'))
);
