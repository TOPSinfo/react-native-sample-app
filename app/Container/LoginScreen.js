/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Keyboard, AsyncStorage } from 'react-native';
import { Colors } from '../Themes'
import { StackActions, NavigationActions } from 'react-navigation'

import styles from './Styles/LoginScreenStyle'

export default class LaunchScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    console.log('login ' + navigation.state.params)
    return {
      headerRight: <View />
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: 'admin'
    }
  }

  saveLoginData = async () => {
    await AsyncStorage.setItem('userLogin', '1');
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'homeStack' }),
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  onLoginPress() {
    Keyboard.dismiss();
    if (this.isValid()) {
      if (this.state.username == 'admin' && this.state.password == 'admin')
        this.saveLoginData();
      else
        alert('Invalid username or password.')
    }
  }

  //check whether user have entered any value in given input boxes
  isValid() {
    const { username, password } = this.state

    if (username != null && username.trim().length <= 0) {
      alert('Username should not be blank.')
      return false;
    }
    else if (password != null && password.trim().length <= 0) {
      alert('Password should not be blank.')
      return false;
    }

    return true
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.loginTitle}>{'tops infosolutions'.toUpperCase()}</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.normalInput}
            placeholderTextColor={Colors.black}
            placeholder={'Username'}
            value={this.state.username}
            autoCapitalize='none'
            underlineColorAndroid={Colors.transparent}
            onChangeText={(username) => this.setState({ username })} />
          <TextInput
            style={styles.normalInput}
            placeholderTextColor={Colors.black}
            placeholder={'Password'}
            autoCapitalize='none'
            secureTextEntry={true}
            value={this.state.password}
            underlineColorAndroid={Colors.transparent}
            onChangeText={(password) => this.setState({ password })} />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.onLoginPress()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
