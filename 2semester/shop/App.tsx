import {Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {ProductListScreen} from "./src/screens/products/ProductListScreen";
import * as React from 'react';
import {ProductScreen} from "./src/screens/product/ProductScreen";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {CartScreen} from "./src/screens/cart/CartScreen";
import {FavouriteScreen} from "./src/screens/favourite/FavouriteScreen";


const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Products"
              component={ProductListScreen}
              options={({navigation}) => ({
                title: 'Products',
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate("Cart")}
                        title="Корзина"
                        color={Colors.black}
                    />
                ),
              })}
          />
          <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={({navigation}) => ({
                title: 'Product'
              })}
          />
          <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={({navigation}) => ({
                title: 'Cart'
              })}
          />
          <Stack.Screen
              name="Favourite"
              component={FavouriteScreen}
              options={({navigation}) => ({
                title: 'Favourite',
              })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});