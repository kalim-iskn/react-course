import React from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Colors} from "react-native/Libraries/NewAppScreen";

import {Entypo} from '@expo/vector-icons';
import {About} from "./screens/About";
import {Leads} from "./screens/Leads";
import {Partners} from "./screens/Partners";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <HomeNavigator></HomeNavigator>
        </NavigationContainer>
    );
}

const HomeNavigator = () => {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreenWithDrawer}
            options={({navigation}) => ({
                headerCenter: () => {
                    {
                        return <Entypo name="news" size={24} color="black"/>
                    }
                },
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate('About')}
                        title="About"
                        color={Colors.blue}
                    />
                ),
            })}
        />
        <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
}

export function HomeScreen({navigation}: { navigation: any }) {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="About" component={About}/>
            <Tab.Screen name="Leads" component={Leads}/>
            <Tab.Screen name="Partners" component={Partners}/>
        </Tab.Navigator>
    );
}

export function HomeScreenWithDrawer({navigation}: { navigation: any }) {
    return (
        <DrawerNavigator></DrawerNavigator>
    );
}

const DrawerNavigator = () => {
    return <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Partners" component={Partners}/>
        <Drawer.Screen name="Leads" component={Leads}/>
    </Drawer.Navigator>
}
