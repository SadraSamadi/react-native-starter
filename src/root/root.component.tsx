import {EnhancedStore} from '@reduxjs/toolkit';
import React, {FC, useEffect, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {AppComponent} from './app/app.component';
import {createRootStore} from './root.api';
import {RootState} from './root.model';

export const RootComponent: FC = () => {

  const [rootStore, setRootStore] = useState<EnhancedStore<RootState>>();

  useEffect(() => {
    (async () => {
      try {
        let store = await createRootStore();
        setRootStore(store);
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  if (!rootStore)
    return null;

  return (
    <ReduxProvider store={rootStore}>
      <AppComponent/>
    </ReduxProvider>
  );

};
