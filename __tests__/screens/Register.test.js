import React from 'react';
import { create } from 'react-test-renderer';

import { RegisterScreen } from '../../src/screens';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-share', () => ({}));
jest.mock('react-native-blob-util', () => ({}));
jest.mock('@react-navigation/native', () => {});

const component = create(<RegisterScreen />);

describe('should be rendered', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
