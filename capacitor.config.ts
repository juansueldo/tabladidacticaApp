import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.tabladidacticaapp',
  appName: 'tabladidacticaApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      launchFadeOutDuration: 2000,
      backgroundColor: "#fad06a",
      androidSplashResourceName: "splash",
      //androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#fad06a",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  }

};

export default config;
