import { StackNavigator, createStackNavigator } from 'react-navigation'
import LoginScreen from '../Container/LoginScreen'
import HomeScreen from '../Container/HomeScreen'
import HomeDetailScreen from '../Container/HomeDetailScreen'

// stack for preLogin screens
const PreLoginStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
    headerMode: 'none'
  })

// stack for afterLogin screens.
const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { title: 'Home', headerBackTitle: null, } },
  HomeDetailScreen: { screen: HomeDetailScreen },
}, {
    headerMode: 'screen',
    headerForceInset: { top: 'never', bottom: 'never' },
  })

//This combines all the stacks in single one.
const PrimaryNav = createStackNavigator({
  preLoginStack: { screen: PreLoginStack },
  homeStack: { screen: HomeStack }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'preLoginStack',
  })

export default PrimaryNav