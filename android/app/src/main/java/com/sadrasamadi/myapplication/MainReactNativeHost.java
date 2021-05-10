package com.sadrasamadi.myapplication;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.List;

public class MainReactNativeHost extends ReactNativeHost {

  public MainReactNativeHost(Application application) {
    super(application);
  }

  @Override
  public boolean getUseDeveloperSupport() {
    return BuildConfig.DEBUG;
  }

  @Override
  protected String getJSMainModuleName() {
    return "index";
  }

  @Override
  protected List<ReactPackage> getPackages() {
    PackageList list = new PackageList(this);
    return list.getPackages();
  }

}
