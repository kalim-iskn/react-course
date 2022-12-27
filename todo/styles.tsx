import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10
    },
    containerTaskInfo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffffff',
        padding: 10
    },
    taskLine: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: 'left',
        padding: 10
    },
    taskLineTitle: {
        flexDirection: "row"
    },
    taskLineTouch: {},
    textInput: {
        width: '100%',
        borderWidth: 1,
        padding: 12,
    }
});