import {StatusBar} from 'expo-status-bar';
import {
    Button,
    FlatList,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {FontAwesome5} from '@expo/vector-icons';
import {Checkbox} from 'react-native-paper';
import {observer} from "mobx-react-lite";
import Task from "./Task";
import Store from "./Store";
import styles from "./styles";
import {useState} from "react";

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tasks"
                    component={TaskListScreen}
                    options={({navigation}) => ({
                        title: 'Board',
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.navigate('Completed')}
                                title="Completed tasks"
                                color={Colors.green}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Completed"
                    component={CompletedTasksScreen}
                    options={({navigation}) => ({
                        title: 'Completed',
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Board"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="TaskInfo"
                    component={TaskInfoScreen}
                    options={({navigation}) => ({
                        title: 'Task information',
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Board"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App

const TaskListScreen = observer((
    {navigation}: { navigation: any }
) => {
    const [text, setText] = useState('');

    const addTask = () => {
        Store.add(text);
        setText('');
    };

    const setDone = (id: string) => {
        Store.setDone(id)
    }

    const deleteTask = (id: string) => {
        Store.delete(id)
    }

    const keyExtractor = (index: number) => {
        return index.toString();
    };

    return <KeyboardAvoidingView style={styles.container} behavior="padding">
        <FlatList
            data={Store.tasks}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item}) => TaskComponent(
                item,
                (taskItem) => {
                    navigation.navigate('TaskInfo', {
                        item: item
                    })
                },
                (taskItem) => {
                    setDone(taskItem.id)
                },
                (taskItem) => {
                    deleteTask(taskItem.id)
                },
                true
            )}
        />
        <TextInput
            style={styles.textInput}
            onChangeText={newText => setText(newText)}
            value={text}>
        </TextInput>
        <Button
            title="Add new task"
            onPress={() => addTask()}></Button>
        <StatusBar style="auto"/>
    </KeyboardAvoidingView>
})


const TaskComponent = (
    item: Task,
    onClick: (task: Task) => void,
    setChecked: (task: Task) => void,
    deleteTask: (task: Task) => void,
    needDelete: boolean
) => {

    return <TouchableOpacity
        onPress={() => {
            onClick(item)
        }}
        style={styles.taskLineTouch}
    >
        <View style={styles.taskLine}>
            <View style={styles.taskLineTitle}>
                <Checkbox
                    status={item.isDone ? 'indeterminate' : 'checked'}
                    onPress={() => {
                        setChecked(item);
                    }}
                />
                <Text style={{
                    marginHorizontal: 12,
                    fontSize: 24,
                    textAlignVertical: 'center',
                    color: (item.isDone ? 'green' : 'red')
                }}>{item.title}</Text>
            </View>
            {needDelete == true &&
            <TouchableOpacity onPress={() => {
                deleteTask(item);
            }}>
                <FontAwesome5 name="trash" size={24} color="black"/>
            </TouchableOpacity>
            }
        </View>
    </TouchableOpacity>
}

// @ts-ignore
const TaskInfoScreen = ({route, navigation}) => {
    const {item} = route.params
    return <View style={styles.containerTaskInfo}>
        <Text>
            ID: {item.id}
        </Text>
        <Text>
            TITLE: {item.title}
        </Text>
    </View>
}

const CompletedTasksScreen = ({navigation}: { navigation: any }) => {
    const keyExtractor = (index: number) => {
        return index.toString();
    };
    return <View style={styles.container}>
        <FlatList
            data={Store.tasks.filter(value => {
                return value.isDone
            })}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item}) => TaskComponent(
                item,
                (taskItem) => {
                },
                (taskItem) => {
                },
                (taskItem) => {
                },
                false
            )}
        />
    </View>
}
