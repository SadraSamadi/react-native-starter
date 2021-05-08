import React from 'react';
import {AppRegistry, Text, View} from 'react-native';

function MyApplication() {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello, World!</Text>
    </View>
  );

}

AppRegistry.registerComponent('MyApplication', () => MyApplication);
