import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../../src/components/Loading';

const components = create(<Loading />);

test('loading is rendered', () => {
  const loading = components.root.findByProps({
    testID: 'loading',
  }).props;
  expect(loading).toMatchSnapshot();
});
