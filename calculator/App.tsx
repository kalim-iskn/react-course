import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from "react";
import styles from "./src/styles";
import {FontAwesome5} from "@expo/vector-icons";

export default function App() {
    const [result, setResult] = useState<number>(0);
    const [inputValue, setInputValue] = useState('');

    function plus() {
        setResult((result) => result + Number(inputValue));
        clearInputValue();
    }

    function minus() {
        setResult((result) => result - Number(inputValue));
        clearInputValue();
    }

    function divide() {
        if (inputValue == '') {
            return;
        }
        setResult((result) => result / Number(inputValue));
        clearInputValue();
    }

    function multiply() {
        if (inputValue == '') {
            return;
        }
        setResult((result) => result * Number(inputValue));
        clearInputValue();
    }

    function clearInputValue() {
        setInputValue('');
    }

    function clear() {
        clearInputValue();
        setResult(0);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity onPress={plus}>
                    <FontAwesome5 name={'plus'} style={styles.iconButton}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={minus}>
                    <FontAwesome5 name={'minus'} style={styles.iconButton}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={divide}>
                    <FontAwesome5 name={'divide'} style={styles.iconButton}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={multiply}>
                    <FontAwesome5 name={'times'} style={styles.iconButton}/>
                </TouchableOpacity>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <FontAwesome5 name={'trash'} onPress={clear} style={styles.iconButton}/>
                </TouchableOpacity>
            </View>
            <View style={styles.inputBlock}>
                <TextInput
                    style={styles.input}
                    editable={true}
                    onChangeText={(text) => setInputValue(text)}
                    value={inputValue}
                />
            </View>
            <Text style={styles.result}>
                {result}
            </Text>
        </SafeAreaView>
    );
}
