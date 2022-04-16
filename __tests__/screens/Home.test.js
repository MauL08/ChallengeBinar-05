import React from 'react';
import { create } from 'react-test-renderer';

import { HomeScreen } from '../../src/screens';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-share', () => ({}));
jest.mock('react-native-blob-util', () => ({}));

const component = create(<HomeScreen />);

describe('should be rendered', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
