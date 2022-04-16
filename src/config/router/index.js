import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Stack';
import { navigationRef } from './Navigate';

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default Root;
