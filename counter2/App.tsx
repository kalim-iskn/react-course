import {Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    function inc() {
        setCount((count) => count + 1);
    }

    function dec() {
        setCount((count) => count - 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.countersBlock}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={inc}
                >
                    <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={dec}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.countBlock}>
                <Text>Count: {count}</Text>
            </View>
        </View>
    )
}
