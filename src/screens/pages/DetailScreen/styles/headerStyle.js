import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: ms(15),
    marginTop: ms(20),
  },
  backIcon: {
    height: ms(28),
    width: ms(28),
    tintColor: Color.DISABLE_BUTTON_COLOR,
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(5),
  },
  loveIcon: {
    tintColor: Color.MAIN_COLOR,
    marginRight: ms(20),
  },
  shareIcon: {
    marginRight: ms(5),
    tintColor: Color.MAIN_COLOR,
  },
});
