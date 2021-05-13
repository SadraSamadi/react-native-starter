import {EnhancedStore} from '@reduxjs/toolkit';
import {AppState} from './app/app.model';

export interface RootState {

  app: AppState;

}

export type RootStore = EnhancedStore<RootState>;
