import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {AppNavParams} from './app.model';
import {HomeScreen} from './home.screen';

const Stack = createStackNavigator<AppNavParams>();

export const AppNavigator: FC = () => {

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );

};
