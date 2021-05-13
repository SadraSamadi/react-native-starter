import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React, {FC, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useDark} from '../../core/core.hook';
import {appInitRequest} from './app.action';
import {AppNavigator} from './app.navigator';
import {selectApp} from './app.selector';
import {SplashComponent} from './splash.component';

export const AppComponent: FC = () => {

  const dispatch = useDispatch();
  const app = useSelector(selectApp);
  const dark = useDark();

  useEffect(() => {
    dispatch(appInitRequest());
  }, []);

  if (app.init !== 'success')
    return null;

  return (
    <PaperProvider>
      <StatusBar style={dark ? 'light' : 'dark'} backgroundColor={dark ? '#FFFFFF1A' : '#0000001A'}/>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      <SplashComponent/>
    </PaperProvider>
  );

};
