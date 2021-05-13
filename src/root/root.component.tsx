import React, {FC, useEffect, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {AppComponent} from './app/app.component';
import {createRootStore} from './root.api';
import {RootStore} from './root.model';

export const RootComponent: FC = () => {

  const [store, setStore] = useState<RootStore>();

  useEffect(() => {
    createRootStore()
      .then(setStore)
      .catch(console.warn);
  }, []);

  if (!store)
    return null;

  return (
    <ReduxProvider store={store}>
      <AppComponent/>
    </ReduxProvider>
  );

};
