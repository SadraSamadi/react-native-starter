import {createAction} from '@reduxjs/toolkit';

export const appInitRequest = createAction('app/init/request');

export const appInitSuccess = createAction('app/init/success');

export const appInitFailure = createAction('app/init/failure');

export const appError = createAction<string>('app/error');
