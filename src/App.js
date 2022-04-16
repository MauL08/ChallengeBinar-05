import { LogBox } from 'react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { persistor, store } from './config/api/store';
import { PersistGate } from 'redux-persist/integration/react';

import Root from './config/router';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
