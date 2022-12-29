import {Button, Pressable, View} from 'react-native';
import styles from "./styles";
import React from "react";
import {makeAutoObservable} from "mobx";
import {observer} from 'mobx-react-lite'

class TicTacToe {
    private _areas = [];
    private _aIChoice = 2;
    private _userChoice = 1;
    private _freeze = false;

    constructor() {
        makeAutoObservable(this);
        this.restart();
    }

    restart() {
        this._freeze = false;
        for (let i = 0; i < 9; i++) {
            this._areas[i] = undefined;
        }
    }

    fill(index) {
        if (this._freeze) {
            return;
        }

        if (this._areas[index] == undefined) {
            this._areas[index] = this._userChoice;
            if (!this.checkEnd()) {
                this.imitateAI();
            }
        }
    }

    imitateAI() {
        let freeAreasIndexes = [];

        this._areas.forEach((value, index) => {
            if (value == undefined) {
                freeAreasIndexes.push(index);
            }
        });

        if (freeAreasIndexes.length == 0) {
            this.alertWinner(-1)
            return;
        }

        this._areas[this.randomItem(freeAreasIndexes)] = this._aIChoice;

        this.checkEnd();
    }

    alertWinner(winnerChoice) {
        this._freeze = true;
        if (winnerChoice == -1) {
            alert("Ничья");
        } else {
            alert("Победитель: " + (winnerChoice == this._userChoice ? "Игрок" : "Компьютер"));
        }
    }

    checkEnd() {
        let result = this.getWinnerChoice();

        if (result != -1) {
            this.alertWinner(result);
            return true;
        }

        return false;
    }

    getWinnerChoice() {
        for (let i = 0; i < 3; i++) {
            let rowNum = i * 3;
            if (
                this._areas[rowNum] != undefined &&
                this._areas[rowNum] == this._areas[rowNum + 1] && this._areas[rowNum] == this._areas[rowNum + 2]
            ) {
                return this._areas[rowNum];
            }

            if (
                this._areas[i] != undefined &&
                this._areas[i] == this._areas[i + 3] && this._areas[i] == this._areas[i + 6]
            ) {
                return this._areas[i];
            }
        }

        let diagonals = [[0, 4, 8], [2, 4, 6]];

        for (let index in diagonals) {
            let diagonal = diagonals[index];

            if (
                this._areas[diagonal[0]] != undefined &&
                this._areas[diagonal[0]] == this._areas[diagonal[1]] &&
                this._areas[diagonal[0]] == this._areas[diagonal[2]]
            ) {
                return this._areas[diagonal[0]];
            }
        }

        return -1;
    }

    randomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    getColor(index) {
        if (this._areas[index] == this._userChoice) {
            return "red";
        }

        if (this._areas[index] == this._aIChoice) {
            return "green";
        }

        return "white";
    }
}

const ticTacToe = new TicTacToe();

const App = observer(() => (
    <View style={styles.container}>
        <Button title={"Restart"} onPress={() => ticTacToe.restart()}/>
        <View style={styles.row}>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(0)}]}
                onPress={() => ticTacToe.fill(0)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(1)}]}
                onPress={() => ticTacToe.fill(1)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(2)}]}
                onPress={() => ticTacToe.fill(2)}
            >
            </Pressable>
        </View>
        <View style={styles.row}>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(3)}]}
                onPress={() => ticTacToe.fill(3)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(4)}]}
                onPress={() => ticTacToe.fill(4)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(5)}]}
                onPress={() => ticTacToe.fill(5)}
            >
            </Pressable>
        </View>
        <View style={styles.row}>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(6)}]}
                onPress={() => ticTacToe.fill(6)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(7)}]}
                onPress={() => ticTacToe.fill(7)}
            >
            </Pressable>
            <Pressable
                style={[styles.area, {backgroundColor: ticTacToe.getColor(8)}]}
                onPress={() => ticTacToe.fill(8)}
            >
            </Pressable>
        </View>
    </View>
))

export default App;
