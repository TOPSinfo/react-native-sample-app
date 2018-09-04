import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    innerContainer: {
        backgroundColor: '#ff0000',
        height: '100%',
        width: 100
    },
    mainImage: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight / 3
    },
    title: {
        fontSize: 30,
        color: Colors.black,
        padding: Metrics.baseMargin
    },
    description: {
        fontSize: 20,
        textAlign:'justify',
        lineHeight:30,
        color: Colors.black,
        marginHorizontal: Metrics.baseMargin
    }
})
