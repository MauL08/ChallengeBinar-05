import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  buyBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ms(20),
    marginHorizontal: ms(40),
  },
  container: {
    alignItems: 'center',
  },
  title: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    marginBottom: ms(3),
  },
  amount: {
    fontWeight: '500',
    color: Color.DISABLE_BUTTON_COLOR,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: Color.DISABLE_BUTTON_COLOR,
    marginLeft: ms(5),
    fontWeight: '500',
  },
  detailedText: {
    color: Color.NON_ACTIVE_COLOR,
  },
});
