import React from 'react';
import { create } from 'react-test-renderer';

import { LoginScreen } from '../../src/screens';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-share', () => ({}));
jest.mock('react-native-blob-util', () => ({}));
jest.mock('@react-navigation/native', () => {});

const component = create(<LoginScreen />);

describe('should be rendered', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
