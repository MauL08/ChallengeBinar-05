import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserIcon,
  EmailIcon,
  PassIcon,
  BackArrowIcon,
  RegisterBannerImage,
  FooterImage,
} from '../../../assets';
import { styles } from './styles';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { postRegisterAuth } from '../../../config/api/slice/userSlice';
import Color from '../../../config/utils/color';

const RegisterScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isLoading } = useSelector(state => state.global);

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formChecker = () => {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailStatus = emailRegEx.test(email); // Boolean

    if (email.length === 0 && password.length === 0 && username.length === 0) {
      Alert.alert('Error', 'Empty form, Please fill form correctly!');
    } else {
      if (username && emailStatus && password.length >= 8) {
        const content = {
          name: username,
          email: email,
          password: password,
        };
        dispatch(postRegisterAuth(content));
      } else {
        Alert.alert('Error', 'Invalid Form!');
      }
    }
  };

  return (
    <ImageBackground
      source={FooterImage}
      style={styles.container}
      resizeMode="contain">
      <ScreenStatusBar status={focus} />
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.navigate('Login')}>
        <Image source={BackArrowIcon} style={styles.backArrow} />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <Image source={RegisterBannerImage} style={styles.bannerImage} />
        <View style={styles.usernameInputContainer(usernameFocus)}>
          <Image
            source={UserIcon}
            style={styles.usernamePrefixIcon(usernameFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor={Color.NON_ACTIVE_COLOR}
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.emailInputContainer(emailFocus)}>
          <Image
            source={EmailIcon}
            style={styles.emailPrefixIcon(emailFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={Color.NON_ACTIVE_COLOR}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.passwordInputContainer(passwordFocus)}>
          <Image
            source={PassIcon}
            style={styles.passPrefixIcon(passwordFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={Color.NON_ACTIVE_COLOR}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={formChecker}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.registerButtonText}>Register</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.guideText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.guideRegisterText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
