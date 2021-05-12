import {NavigationContainer} from '@react-navigation/native';
import {hideAsync} from 'expo-splash-screen';
import React, {FC, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {appInitRequest} from './app.action';
import {AppNavigator} from './app.navigator';
import {selectApp} from './app.selector';

export const AppComponent: FC = () => {

  const dispatch = useDispatch();
  const app = useSelector(selectApp);

  useEffect(() => {
    dispatch(appInitRequest());
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (app.ready)
          await hideAsync();
      } catch (err) {
        console.warn(err);
      }
    })();
  }, [app.ready]);

  if (!app.ready)
    return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </PaperProvider>
  );

};
