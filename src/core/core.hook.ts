import {Asset, useAssets} from 'expo-asset';
import _ from 'lodash';
import {useColorScheme} from 'react-native';

export function useDark(): boolean {
  const scheme = useColorScheme();
  return scheme === 'dark';
}

export function useAsset(id: number): Asset {
  const [assets] = useAssets(id);
  return _.head(assets);
}
