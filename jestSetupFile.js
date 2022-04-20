import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-share', () => {});
jest.mock('react-native-blob-util', () => {});
jest.mock('@react-native-community/netinfo', () => {});
