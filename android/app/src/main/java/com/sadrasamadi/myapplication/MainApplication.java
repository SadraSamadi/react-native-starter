package com.sadrasamadi.myapplication;

import android.app.Application;
import android.content.Context;
import android.content.res.Configuration;

import androidx.annotation.NonNull;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JSIModulePackage;
import com.facebook.soloader.SoLoader;
import com.sadrasamadi.myapplication.generated.BasePackageList;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;

import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;

import java.lang.reflect.Method;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private ReactModuleRegistryProvider mModuleRegistryProvider;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    protected JSIModulePackage getJSIModulePackage() {
      return new ReanimatedJSIModulePackage();
    }

    @Override
    protected List<ReactPackage> getPackages() {
      PackageList list = new PackageList(this);
      List<ReactPackage> packages = list.getPackages();
      ReactModuleRegistryProvider provider = getModuleRegistryProvider();
      ModuleRegistryAdapter adapter = new ModuleRegistryAdapter(provider);
      packages.add(adapter);
      return packages;
    }

  };

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, false);
    initFlipper();
  }

  @Override
  public void onConfigurationChanged(@NonNull Configuration config) {
    super.onConfigurationChanged(config);
    ReactNativeHost host = getReactNativeHost();
    ReactInstanceManager manager = host.getReactInstanceManager();
    manager.onConfigurationChanged(this, config);
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  private void initFlipper() {
    if (!BuildConfig.DEBUG)
      return;
    try {
      ReactInstanceManager manager = mReactNativeHost.getReactInstanceManager();
      Class<?> clazz = Class.forName("com.sadrasamadi.myapplication.ReactNativeFlipper");
      Method method = clazz.getMethod("init", Context.class, ReactInstanceManager.class);
      method.invoke(null, this, manager);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  private ReactModuleRegistryProvider getModuleRegistryProvider() {
    if (mModuleRegistryProvider == null) {
      BasePackageList list = new BasePackageList();
      List<Package> packages = list.getPackageList();
      mModuleRegistryProvider = new ReactModuleRegistryProvider(packages);
    }
    return mModuleRegistryProvider;
  }

}
