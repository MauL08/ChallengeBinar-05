import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  secMain: {
    marginBottom: ms(90),
  },
  container: {
    margin: ms(18),
  },
  popular: {
    color: Color.DISABLE_BUTTON_COLOR,
    letterSpacing: ms(1),
    fontSize: ms(16),
    fontWeight: 'bold',
    marginTop: ms(16),
    marginLeft: ms(18),
  },
});
