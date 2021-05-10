package com.sadrasamadi.myapplication;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.sadrasamadi.myapplication.generated.BasePackageList;

import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;

import java.util.List;

public class MainReactNativeHost extends ReactNativeHost {

  private ReactModuleRegistryProvider mModuleRegistryProvider;

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
    List<ReactPackage> packages = list.getPackages();
    ReactModuleRegistryProvider provider = getModuleRegistryProvider();
    ModuleRegistryAdapter adapter = new ModuleRegistryAdapter(provider);
    packages.add(adapter);
    return packages;
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
