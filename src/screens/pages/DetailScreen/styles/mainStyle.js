import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    justifyContent: 'space-between',
  },
  buyButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(12),
    borderRadius: ms(10),
    marginHorizontal: ms(20),
    marginBottom: ms(20),
  },
  buyButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(14),
    fontWeight: '500',
    textAlign: 'center',
  },
});
