import {
  NavigationActions,
  StackActions
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider } from 'react-redux';
import React from 'react';
import AppNavigation from './app/Navigation/AppNavigation'
import { AsyncStorage, View } from 'react-native'
import HomeDataReducer from './app/Reducers/HomeDataReducer'
import thunk from 'redux-thunk';

import firebase from 'firebase'

const navReducer = createNavigationReducer(AppNavigation);
const appReducer = combineReducers({
  nav: navReducer,
  homeReducer: HomeDataReducer
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
}
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const NavMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
let middleware = [thunk, NavMiddleware]
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
import {SharedElementRenderer} from 'react-native-motion'
import ReduxNavigation from './app/Navigation/ReduxNavigation';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true;
    this.state = {
      loading: true,
    }
    var config = {
      apiKey: "AIzaSyCILoPB9QDNgv6IpJcZpzUo9qOQEPKqILU",
      authDomain: "tops-reactnative-demo.firebaseapp.com",
      databaseURL: "https://tops-reactnative-demo.firebaseio.com",
      projectId: "tops-reactnative-demo",
      storageBucket: "tops-reactnative-demo.appspot.com",
      messagingSenderId: "1055656768910"
    };
    if (!firebase.apps.length)
      firebase.initializeApp(config);

    this.getLoginValue()
  }

  async getLoginValue() {
    const loginValue = await AsyncStorage.getItem('userLogin');
    if (loginValue != null && loginValue == '1') {
      this.setState({ loading: false }, () => {
        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: 'homeStack' }),
          ]
        })
        store.dispatch(resetAction);
      })

    } else {
      this.setState({ loading: false })
    }
  }

  render() {
    return (
      !this.state.loading ?
        <Provider store={store}>
          <SharedElementRenderer>
            <ReduxNavigation />
          </SharedElementRenderer>
        </Provider>
        : <View />
    );
  }
}