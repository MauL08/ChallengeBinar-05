import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../api/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../router/Navigate';

export const Component = screen => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{screen}</PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
