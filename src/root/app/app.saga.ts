import {SagaIterator} from 'redux-saga';
import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {FailureAction} from '../../core/core.model';
import {appError, appInitFailure, appInitRequest, appInitSuccess} from './app.action';
import {init, toast} from './app.api';

export function* appSaga(): SagaIterator {
  yield takeLeading(appInitRequest, handleAppInitRequest);
  yield takeEvery(appError, handleAppError);
}

function* handleAppInitRequest(): SagaIterator {
  try {
    yield call(init);
    yield put(appInitSuccess());
  } catch (err) {
    yield put(appInitFailure(err));
    yield put(appError(err));
  }
}

function* handleAppError(action: FailureAction): SagaIterator {
  yield call(toast, action.error);
}
