import {PayloadAction} from '@reduxjs/toolkit';
import {Platform, ToastAndroid} from 'react-native';
import {SagaIterator} from 'redux-saga';
import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {appError, appInitFailure, appInitRequest, appInitSuccess} from './app.action';
import {init} from './app.api';

export function* appSaga(): SagaIterator {
  yield takeLeading(appInitRequest, handleAppInitRequest);
  yield takeEvery(appError, handleAppError);
}

function* handleAppInitRequest(): SagaIterator {
  try {
    yield call(init);
    yield put(appInitSuccess());
  } catch (err) {
    yield put(appInitFailure());
    yield put(appError(err.message));
  }
}

function* handleAppError(action: PayloadAction<string>): SagaIterator {
  if (Platform.OS === 'android')
    yield call([ToastAndroid, ToastAndroid.show], action.payload, ToastAndroid.SHORT);
}
