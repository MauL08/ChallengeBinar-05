import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginTop: moderateScale(45),
  },
  checker: {
    height: moderateScale(200),
  },
  checkerText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  backLoginButton: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(45),
    backgroundColor: Color.MAIN_COLOR,
    borderRadius: moderateScale(8),
    width: moderateScale(200),
    padding: moderateScale(12),
  },
  backLoginText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
});
