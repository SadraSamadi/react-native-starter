import delay from 'delay';
import {Platform, ToastAndroid} from 'react-native';

export async function init(): Promise<void> {
  await delay(2000);
}

export async function toast(message: string): Promise<void> {
  if (Platform.OS === 'android')
    ToastAndroid.show(message, ToastAndroid.SHORT);
}
