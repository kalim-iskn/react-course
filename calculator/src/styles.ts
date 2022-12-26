import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 100
    },
    icons: {
        flex: 1,
        justifyContent: "space-around",
        marginTop: 10,
        flexDirection: "row"
    },
    iconButton: {
        fontSize: 50,
        textAlign: "center",
    },
    inputBlock: {
        flex: 2,
        alignItems: "center"
    },
    input: {
        width: "90%",
        backgroundColor: "gray",
        padding: 15
    },
    result: {
        flex: 4,
        textAlign: "center",
        fontSize: 40,
    }
})
