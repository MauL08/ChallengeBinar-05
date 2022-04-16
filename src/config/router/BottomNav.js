import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { tabBarStyle } from './tabBarStyle';
import {
  EnabledHomeIcon,
  EnabledBookIcon,
  EnabledBookmarkIcon,
  EnabledSettingIcon,
  DisabledHomeIcon,
  DisabledBookIcon,
  DisabledBookmarkIcon,
  DisabledSettingIcon,
} from '../../assets/';
import {
  HomeScreen,
  BooksScreen,
  BookmarkScreen,
  SettingScreen,
} from '../../screens/bottomNav';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <Image source={EnabledHomeIcon} />
              </View>
            ) : (
              <View>
                <Image source={DisabledHomeIcon} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <Image source={EnabledBookIcon} />
              </View>
            ) : (
              <View>
                <Image source={DisabledBookIcon} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <Image source={EnabledBookmarkIcon} />
              </View>
            ) : (
              <View>
                <Image source={DisabledBookmarkIcon} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <Image source={EnabledSettingIcon} />
              </View>
            ) : (
              <View>
                <Image source={DisabledSettingIcon} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
