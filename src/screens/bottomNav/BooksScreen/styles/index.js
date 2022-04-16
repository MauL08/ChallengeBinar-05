import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  title: {
    textAlign: 'center',
    marginTop: ms(25),
    fontWeight: 'bold',
    color: Color.DISABLE_BUTTON_COLOR,
    fontSize: ms(18),
  },
});
