package com.sadrasamadi.myapplication;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.soloader.SoLoader;

public class MainApplication extends Application implements ReactApplication {

  private MainReactNativeHost mMainReactNativeHost;

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, false);
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (mMainReactNativeHost == null)
      mMainReactNativeHost = new MainReactNativeHost(this);
    return mMainReactNativeHost;
  }

}
