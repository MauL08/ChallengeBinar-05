/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

import { Provider } from 'react-redux';
import { persistor, store } from '../src/config/api/store';
import { PersistGate } from 'redux-persist/integration/react';
import Root from '../src/config/router';

const AppComponent = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

test('renders correctly', () => {
  create(<AppComponent />);
});
