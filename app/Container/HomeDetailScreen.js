/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, BackHandler } from 'react-native';

import styles from './Styles/HomeDetailStyle'
import { CachedImage } from 'react-native-cached-image';

export default class HomeDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.backPressSubscriptions = new Set()
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack()
      return true;
    });
  }

  render() {

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CachedImage style={styles.mainImage} source={{ uri: this.props.navigation.state.params.data.image }} />
          <Text style={styles.title}>
            {this.props.navigation.state.params.data.name}
          </Text>
          <Text style={styles.description}>
            {this.props.navigation.state.params.data.desc}
          </Text>
        </ScrollView>
      </View>
    );
  }
}