import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import _ from 'lodash';
import {AsyncState, AsyncStatus, Failure, FailureAction, TypedSelector} from './core.model';

export function error<P = void>(): (err: Error, payload: P) => { payload: P; error: Failure; } {
  return (err, payload) => ({payload, error: err.message});
}

export function status<S extends object>(path: string, status: AsyncStatus): CaseReducer<S> {
  return draft => _.set(draft, path, status);
}

export function request<S, T>(path?: string): CaseReducer<S> {
  return draft => {
    let state: AsyncState<T> = path ? _.get(draft, path) : draft;
    state.status = 'request';
    state.error = null;
  };
}

export function cancel<S, T>(path?: string): CaseReducer<S> {
  return draft => {
    let state: AsyncState<T> = path ? _.get(draft, path) : draft;
    state.status = 'cancel';
  };
}

export function success<S, T>(path?: string): CaseReducer<S, PayloadAction<T>> {
  return (draft, action) => {
    let state: AsyncState<T> = path ? _.get(draft, path) : draft;
    state.status = 'success';
    state.data = action.payload;
  };
}

export function failure<S, T, P>(path?: string): CaseReducer<S, FailureAction<P>> {
  return (draft, action) => {
    let state: AsyncState<T> = path ? _.get(draft, path) : draft;
    state.status = 'failure';
    state.error = action.error;
  };
}

export const selector: TypedSelector<any> = select => (props, ...args) => state => select(state, props, ...args);
