import React from 'react';
import { create } from 'react-test-renderer';
import { BooksScreen } from '../../src/screens';
import { Component } from '../../src/config/utils/TestComponent';

const component = create(Component(<BooksScreen />));

describe('should be rendered', () => {
  test('matching snapshot', async () => {
    expect(component).toMatchSnapshot();
  });
});
