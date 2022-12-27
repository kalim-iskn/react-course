import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";

export function About({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <StatusBar style="auto"/>
        </View>
    );
}