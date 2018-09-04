import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { Colors, Metrics } from '../Themes';
import { StackActions, NavigationActions } from 'react-navigation'
import HomeListItem from '../Components/HomeListItem'
import { connect } from 'react-redux';
import styles from './Styles/HomeScrenStyle'
import { fetchHomeData } from '../Redux/HomeDataRedux';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerRight: <TouchableOpacity style={{ margin: Metrics.baseMargin, alignItems: 'center' }}
        onPress={() => {
          navigation.state.params.logoutPress()
        }}>
        <Text style={{ color: Colors.blue, fontSize: 18 }}>{'Log out'}</Text>
      </TouchableOpacity>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      listData: [],
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ logoutPress: this.logoutPress.bind(this) })
    this.props.fetchHomeData();
  }

  logoutPress = async () => {
    await AsyncStorage.clear();
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'preLoginStack' }),
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  onListItemClick = (item) => {
    this.props.navigation.navigate('HomeDetailScreen', { data: item })
  }

  componentWillReceiveProps(props) {
    if (!props.isLoading) {
      this.setState({ listData: props.data })
    }
  }

  render() {

    return (
      <View style={styles.mainContainer}>
        {this.props.isLoading ?
          <ActivityIndicator /> :
          <FlatList renderItem={({ item }) => <HomeListItem data={item} onItemClick={this.onListItemClick} />}
            data={this.state.listData}
            numColumns={2}
            contentContainerStyle={{ padding: 10, justifyContent: 'center', }}
          />
        }
      </View>
    );
  }

}
const mapStateToProps = (state) => ({
  isLoading: state.homeReducer.isLoading,
  error: state.homeReducer.error,
  data: state.homeReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData: () => dispatch(fetchHomeData())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);