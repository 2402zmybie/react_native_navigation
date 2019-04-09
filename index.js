/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';

//导入导航器(头部,底部,转场,抽屉)
import {AppStackNavigator} from './navigator/AppNavigator'
//导入导航器(SwitchNavigator)
import {AppSwitchNavigator} from './navigator/AppNavigator'
//在新版的react-navigation里面提供了 一个createAppContainer组件
import {createAppContainer} from 'react-navigation'

// const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)
const AppSwitchNavigatorContainer = createAppContainer(AppSwitchNavigator)


AppRegistry.registerComponent(appName, () => AppSwitchNavigatorContainer);
