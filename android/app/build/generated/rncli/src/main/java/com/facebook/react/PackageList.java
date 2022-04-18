
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @react-native-async-storage/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// lottie-react-native
import com.airbnb.android.react.lottie.LottiePackage;
// react-native-blob-util
import com.ReactNativeBlobUtil.ReactNativeBlobUtilPackage;
// react-native-document-picker
import com.reactnativedocumentpicker.DocumentPickerPackage;
// react-native-file-picker
import com.filepicker.FilePickerPackage;
// react-native-file-viewer
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
// react-native-image-picker
import com.imagepicker.ImagePickerPackage;
// react-native-pdf
import org.wonday.pdf.RCTPdfView;
// react-native-push-notification
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-share
import cl.json.RNSharePackage;
// react-native-sound-player
import com.johnsonsu.rnsoundplayer.RNSoundPlayerPackage;
// react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreenReactPackage;
// react-native-video
import com.brentvatne.react.ReactVideoPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new AsyncStoragePackage(),
      new NetInfoPackage(),
      new LottiePackage(),
      new ReactNativeBlobUtilPackage(),
      new DocumentPickerPackage(),
      new FilePickerPackage(),
      new RNFileViewerPackage(),
      new ImagePickerPackage(),
      new RCTPdfView(),
      new ReactNativePushNotificationPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new RNSharePackage(),
      new RNSoundPlayerPackage(),
      new SplashScreenReactPackage(),
      new ReactVideoPackage()
    ));
  }
}
