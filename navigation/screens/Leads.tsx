import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";

export function Leads({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Leads Screen</Text>
            <StatusBar style="auto"/>
        </View>
    );
}