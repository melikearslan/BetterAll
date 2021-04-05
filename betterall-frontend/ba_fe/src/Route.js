import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StartupScreen from './screens/StartupScreen';
/*
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const LoginScreenA = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
});
*/
const AppNavigator = createStackNavigator(
  {
    StartupScreen: {
      screen: StartupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'StartupScreen',
  },
);

export default createAppContainer(AppNavigator);