import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useShoppingItems } from '../context/Providers/ShoppingItemsProvider'
import Item from './Item'

const Shopping = ({navigation, route}) => {
    const { shoppingItems } = useShoppingItems()
    return (
        <View >
            <FlatList 
            data={shoppingItems} 
            renderItem={({item}) => <Item item={item} navigation={navigation} route={route}/>}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Shopping
