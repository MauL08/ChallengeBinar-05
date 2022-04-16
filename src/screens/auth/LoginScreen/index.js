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
  EmailIcon,
  PassIcon,
  LoginBannerImage,
  FooterImage,
} from '../../../assets';
import { styles } from './styles';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { postLoginAuth } from '../../../config/api/slice/userSlice';
import Color from '../../../config/utils/color';

const LoginScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading } = useSelector(state => state.global);

  const formChecker = () => {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailStatus = emailRegEx.test(email); // Boolean

    if (email.length === 0 && password.length === 0) {
      Alert.alert('Error', 'Empty form, Please fill form correctly!');
    } else {
      if (emailStatus && password.length >= 8) {
        const content = {
          email: email,
          password: password,
        };
        dispatch(postLoginAuth(content));
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
      <View style={styles.formContainer}>
        <Image source={LoginBannerImage} style={styles.bannerImage} />
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
        <TouchableOpacity style={styles.loginButton} onPress={formChecker}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.guideText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.guideRegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
