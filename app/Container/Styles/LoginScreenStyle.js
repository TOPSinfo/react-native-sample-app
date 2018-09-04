import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    textinputView: {
        width: '100%',
        padding: 10
    },
    loginTitle: {
        color: Colors.black,
        fontSize: 25,
        marginBottom: Metrics.baseMargin * 2
    },
    loginButton: {
        padding: Metrics.baseMargin,
        backgroundColor: Colors.lightGray
    },
    loginText: {
        color: Colors.blue,
        fontSize: 20
    }
})
