export const fontSize = {
    small: 15,
    medium: 20,
    large: 25,
    extraLarge: 30
}
export const headingText = {
    s: 18,
    x: 22,
    xxl: 27,
    xxxl: 32
}
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const layout = {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
};
