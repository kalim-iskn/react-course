import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16
    },
    area: {
        flex: 1,
        borderWidth : 2,
        borderColor: "gray",
        height: 150
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});