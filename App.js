/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import FakeLogin from './FakeLogin';

import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    SecondScreen,
    FakeLogin
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default createAppContainer(AppNavigator);
