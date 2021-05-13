package com.sadrasamadi.myapplication;

import android.content.Context;

import com.facebook.flipper.android.AndroidFlipperClient;
import com.facebook.flipper.android.utils.FlipperUtils;
import com.facebook.flipper.core.FlipperClient;
import com.facebook.flipper.plugins.inspector.DescriptorMapping;
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;
import com.facebook.react.ReactInstanceManager;

public class ReactNativeFlipper {

  public static void init(Context context, ReactInstanceManager reactInstanceManager) {
    if (!FlipperUtils.shouldEnableFlipper(context))
      return;
    FlipperClient client = AndroidFlipperClient.getInstance(context);
    DescriptorMapping descriptor = DescriptorMapping.withDefaults();
    InspectorFlipperPlugin inspector = new InspectorFlipperPlugin(context, descriptor);
    client.addPlugin(inspector);
  }

}
