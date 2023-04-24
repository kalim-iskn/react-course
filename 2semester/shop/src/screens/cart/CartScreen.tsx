import {observer} from "mobx-react-lite";
import {FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ProductStore from "../../store/ProductStore";
import * as React from "react";
import {Product} from "../../models/Product";
import {Card} from "@rneui/base";
import CartStore from "../../store/CartStore";


export const CartScreen = observer((
    {navigation}: { navigation: any }
) => {
    let data = ProductStore.products.filter((product) => {
        return CartStore.cart.has(product.id)
    })
    let sum = data.map((product) => {
        return product.price
    }).reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)
    return <View style={styles.container}>
        <FlatList
            style={styles.products}
            data={data}
            renderItem={({item}) => ProductCartComponent(
                item
            )}
            keyExtractor={(item) => item.id}
        />
        <View>
            <Text style={{
                fontSize: 18,
                fontWeight: "500",
                marginBottom: 8
            }}>Итого: {sum}₽</Text>
            <Pressable
                onPress={() => {
                }}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 16,
                    backgroundColor: 'rgb(0,0,0)',
                    width: "100%",
                    marginBottom: 32
                }}>
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "500",
                }
                }>Оплатить</Text>
            </Pressable>
        </View>
    </View>
})

const ProductCartComponent = (
    product: Product,
) => {
    return <TouchableOpacity onPress={() => {
    }}><Card containerStyle={styles.product} wrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <View style={{
            flexDirection: "row"
        }}>
            <View style={{marginStart: 16, justifyContent: "center"}}>
                <Text style={{fontSize: 18, fontWeight: "500", color: "black"}}>{product.title}</Text>
            </View>
        </View>
        <Text style={{fontSize: 24, fontWeight: "bold", color: "black" }}>{product.price}₽</Text>
    </Card>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    products: {
        flexDirection: "column",
    },
    product: {

        margin: 8,
        backgroundColor: "white",
        elevation: 4,
    },
});