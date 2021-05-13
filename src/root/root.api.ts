import {configureStore} from '@reduxjs/toolkit';
import _ from 'lodash';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {RootStore} from './root.model';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';

export async function createRootStore(): Promise<RootStore> {
  let sagaMiddleware = createSagaMiddleware();
  let store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => _.filter([
      ...getDefaultMiddleware(),
      sagaMiddleware,
      __DEV__ && logger
    ])
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
