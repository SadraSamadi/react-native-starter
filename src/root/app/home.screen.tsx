import {StatusBar} from 'expo-status-bar';
import React, {FC} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {tw} from 'react-native-tailwindcss';

export const HomeScreen: FC = () => {

  const scheme = useColorScheme();
  const dark = scheme === 'dark';

  return (
    <View style={[tw.flex1, tw.itemsCenter, tw.justifyCenter, dark ? tw.bgBlack : tw.bgWhite]}>
      <StatusBar style={dark ? 'light' : 'dark'} backgroundColor={dark ? '#FFFFFF1A' : '#0000001A'}/>
      <Text style={[dark ? tw.textWhite : tw.textBlack]}>Hello, World!</Text>
    </View>
  );

};
