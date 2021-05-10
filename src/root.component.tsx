import React, {FC} from 'react';
import {Text, View} from 'react-native';

export const RootComponent: FC = () => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello, World!</Text>
    </View>
  );

};
