import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    listItem: {
        width: Metrics.screenWidth / 2 - 30,
        height: Metrics.screenWidth / 2 - 30,
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.lightGray
    },
    listText: {
        color: Colors.white,
        fontSize: 20,
        alignSelf: 'center',
        padding: 5,
        zIndex: 2,
        position: 'absolute',
        bottom: 0
    },
    listItemInnerView: {
        width: '100%',
        height: '100%'
    },
    listImage: {
        flex: 1
    },
    listFooterView: {
        backgroundColor: Colors.black,
        opacity: 0.7,
        width: '100%',
        height: 30,
        position: 'absolute',
        bottom: 0
    }
})
