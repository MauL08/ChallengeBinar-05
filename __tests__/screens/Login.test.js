import { create } from 'react-test-renderer';

import LoginScreen from '../../src/screens/auth/LoginScreen';

const component = create(LoginScreen);

describe('should be rendered', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
