import {hideAsync} from 'expo-splash-screen';
import React, {FC, useMemo, useState} from 'react';
import {Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import {tw} from 'react-native-tailwindcss';
import {assets} from '../../common/common.constant';
import {useAsset, useDark} from '../../core/core.hook';

export const SplashComponent: FC = () => {

  const dark = useDark();
  const splash = useAsset(assets.splash);
  const [hidden, setHidden] = useState(false);
  const value = useMemo(() => new Animated.Value(1), []);
  const timing = useMemo(() => Animated.timing(value, {
    toValue: 0,
    duration: 800,
    useNativeDriver: true
  }), [value]);

  async function onLoad(): Promise<void> {
    await hideAsync();
    timing.start(() => setHidden(true));
  }

  if (hidden)
    return null;

  return (
    <Animated.View style={[tw.absolute, tw.inset0, dark ? tw.bgBlack : tw.bgWhite, {opacity: value}]}>
      {splash && (
        <FastImage
          source={splash}
          style={[tw.wFull, tw.hFull]}
          resizeMode={FastImage.resizeMode.contain}
          onLoadEnd={onLoad}/>
      )}
    </Animated.View>
  );

};
