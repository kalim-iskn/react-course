import {Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite'
import {makeAutoObservable} from "mobx";
import styles from "./styles";

class Counter {
    private count = 0;
    private fontSizeStart = 20;

    constructor() {
        makeAutoObservable(this);
    }

    inc() {
        this.count++;
    }

    dec() {
        this.count--;
    }

    fontSize() {
        return this.fontSizeStart + this.count;
    }

    getCount() {
        return this.count;
    }
}

const counter = new Counter()

const App = observer(() => (
    <View style={styles.container}>
        <View style={styles.countersBlock}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    counter.inc()
                }}
            >
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    counter.dec()
                }}
            >
                <Text>-</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.countBlock}>
            <Text style={{fontSize: counter.fontSize()}}>Count: {counter.getCount()}</Text>
        </View>
    </View>
))

export default App
