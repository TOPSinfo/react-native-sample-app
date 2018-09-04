import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { CachedImage } from 'react-native-cached-image'
import styles from './Styles/HomeListItemStyle'

export default class HomeListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        return (
            <TouchableOpacity onPress={() => this.props.onItemClick(data)} style={styles.listItem}>
                <View style={styles.listItemInnerView}>
                    <CachedImage style={styles.listImage} source={{ uri: data.image }} />
                    <View style={styles.listFooterView} />
                    <Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
