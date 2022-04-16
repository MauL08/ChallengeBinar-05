import { Alert } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from '../../router/Navigate';
import { setLoading } from './globalSlice';

axios.defaults.validateStatus = status => {
  return status < 500;
};

export const postLoginAuth = createAsyncThunk(
  'user/loginAuth',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${BASE_URL}/auth/login`, data);
      if (response.status <= 201) {
        dispatch(setLoading(false));
        navigate('Main');
        dispatch(setLoading(true));
      }
      if (response.status === 401) {
        const logErr = response.data.message;
        Alert.alert('Error', logErr);
        dispatch(setLoading(false));
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const postRegisterAuth = createAsyncThunk(
  'user/registerAuth',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${BASE_URL}/auth/register`, data);
      if (response.status <= 201) {
        dispatch(setLoading(false));
        navigate('Success');
      }
      if (response.status === 400) {
        const logErr = response.data.message;
        Alert.alert('Error', logErr);
        dispatch(setLoading(false));
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  userInfo: {},
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: state => {
      return {
        ...state,
        userInfo: {},
        token: '',
      };
    },
  },
  extraReducers: {
    // Post Login
    [postLoginAuth.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: action.payload.user,
        token: action.payload.tokens.access.token,
      };
    },
    // Post Register
    [postRegisterAuth.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: action.payload.user,
        token: action.payload.tokens.access.token,
      };
    },
    // [postLoginAuth.rejected]: state => {
    //   return {
    //     ...state,
    //   };
    // },
    // [postRegisterAuth.rejected]: state => {
    //   return {
    //     ...state,
    //   };
    // },
  },
});

export const { setLogout } = userSlice.actions;
export default userSlice.reducer;
