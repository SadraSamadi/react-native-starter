import React, {FC} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {tw} from 'react-native-tailwindcss';
import {useDark} from '../../core/core.hook';

export const HomeScreen: FC = () => {

  const dark = useDark();

  return (
    <View style={[tw.flex1, tw.itemsCenter, tw.justifyCenter, dark ? tw.bgGray900 : tw.bgGray100]}>
      <Animated.Text style={[dark ? tw.textGray100 : tw.textGray900]}>Hello, World!</Animated.Text>
    </View>
  );

};
