/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



import WelcomScreen from './src/Components/WelcomScreen';
import Stack from './src/Navigation/PassScreen';
import PassScreen from './src/Navigation/PassScreen';
import CartScreen from './src/Screen/CartScreen';

import HomeScreen from './src/Screen/HomeScreen';



AppRegistry.registerComponent(appName, () => App);
