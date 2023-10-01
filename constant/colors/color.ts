export const colors = {
    black: "#000000",
    white: "#ffffff",
    orange: "orange",
    green: "rgb(100, 240,100)",
    grey: "rgb(60,60,100)",
    secondaryWhite: "rgb(200, 200, 200)"
}
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export default {
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};
