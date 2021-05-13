import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {colors} from 'react-native-tailwindcss';
import {useDark} from '../../core/core.hook';
import {AppNavParams} from './app.model';
import {HomeScreen} from './home.screen';

const Stack = createStackNavigator<AppNavParams>();

export const AppNavigator: FC = () => {

  const dark = useDark();

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: dark ? colors.black : colors.white
        },
        headerTitleStyle: {
          color: dark ? colors.white : colors.black
        }
      }}>
      <Stack.Screen name="home" component={HomeScreen} options={{title: 'Home'}}/>
    </Stack.Navigator>
  );

};
