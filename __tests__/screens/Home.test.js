import React from 'react';
import { create } from 'react-test-renderer';
import { HomeScreen } from '../../src/screens';
import { Component } from '../../src/config/utils/TestComponent';

const component = create(Component(<HomeScreen />));

describe('should be rendered', () => {
  test('matching snapshot', async () => {
    expect(component).toMatchSnapshot();
  });
});
