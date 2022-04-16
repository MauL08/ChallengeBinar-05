import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  description: {
    margin: ms(20),
  },
  overviewTitle: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    padding: ms(15),
    borderRadius: ms(15),
  },
  overviewText: {
    fontSize: ms(15),
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: 'bold',
  },
  textDesc: {
    color: Color.NON_ACTIVE_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
    marginTop: ms(6),
    letterSpacing: ms(0.5),
    lineHeight: ms(18),
  },
});
