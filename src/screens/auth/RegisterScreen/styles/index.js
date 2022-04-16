import { StyleSheet, Dimensions } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

const { height } = Dimensions.get('screen');

const inputStyle = focus => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderBottomColor: focus ? Color.MAIN_COLOR : Color.NON_ACTIVE_COLOR,
  borderLeftColor: Color.BACKGROUND_COLOR,
  borderRightColor: Color.BACKGROUND_COLOR,
  borderTopColor: Color.BACKGROUND_COLOR,
  width: ms(200),
  marginBottom: ms(15),
});

const iconStyle = focus => ({
  tintColor: focus ? Color.MAIN_COLOR : Color.NON_ACTIVE_COLOR,
  marginRight: ms(12),
  marginLeft: ms(7),
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    height: height,
  },
  backArrowContainer: {
    marginLeft: ms(15),
    marginTop: ms(15),
    position: 'absolute',
  },
  backArrow: {
    height: ms(25),
    width: ms(25),
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(10),
  },
  bannerImage: {
    height: ms(240),
    width: ms(200),
    marginBottom: ms(15),
  },
  usernameInputContainer: focus => ({
    ...inputStyle(focus),
  }),
  emailInputContainer: focus => ({
    ...inputStyle(focus),
  }),
  passwordInputContainer: focus => ({
    ...inputStyle(focus),
  }),
  usernamePrefixIcon: focus => ({
    ...iconStyle(focus),
  }),
  emailPrefixIcon: focus => ({
    ...iconStyle(focus),
  }),
  passPrefixIcon: focus => ({
    ...iconStyle(focus),
  }),
  textInput: {
    color: Color.DISABLE_BUTTON_COLOR,
    width: ms(150),
  },
  registerButton: {
    marginTop: ms(10),
    marginBottom: ms(15),
    backgroundColor: Color.MAIN_COLOR,
    borderRadius: ms(8),
    width: ms(200),
    padding: ms(12),
  },
  registerButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: ms(14),
  },
  guideText: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontSize: ms(12),
  },
  guideRegisterText: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    marginTop: ms(3),
    fontSize: ms(14),
  },
});
