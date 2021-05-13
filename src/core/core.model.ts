import {ParametricSelector, PayloadAction, Selector} from '@reduxjs/toolkit';

export type AsyncStatus = 'request' | 'cancel' | 'success' | 'failure';

export type Failure = string;

export type FailureAction<P = void> = PayloadAction<P, string, never, Failure>;

export interface AsyncState<T, S = AsyncStatus, E = Failure> {

  status: S;

  data: T;

  error: E;

}

export interface TypedSelector<S> {
  <R, P = void>(select: ParametricSelector<S, P, R>): (props: P, ...args: any[]) => Selector<S, R>;
}
