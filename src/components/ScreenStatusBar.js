import { StatusBar } from 'react-native';
import React from 'react';

const ScreenStatusBar = props => {
  return props.status ? (
    <StatusBar backgroundColor="white" barStyle="dark-content" />
  ) : null;
};

export default ScreenStatusBar;
