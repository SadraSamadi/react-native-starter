import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import {preventAutoHideAsync} from 'expo-splash-screen';
import {RootComponent} from './root/root.component';

(async () => {
  try {
    await preventAutoHideAsync();
  } catch (err) {
    console.warn(err);
  }
})();

registerRootComponent(RootComponent);
