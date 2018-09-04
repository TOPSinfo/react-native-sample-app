import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')

const metrics = {
    baseMargin:10,
    smallMargin:5,
    screenHeight:height,
    screenWidth:width
}

export default metrics