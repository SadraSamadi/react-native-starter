import {createAction} from '@reduxjs/toolkit';
import {error} from '../../core/core.util';

export const appInitRequest = createAction('app/init/request');

export const appInitSuccess = createAction('app/init/success');

export const appInitFailure = createAction('app/init/failure', error());

export const appError = createAction('app/error', error());
