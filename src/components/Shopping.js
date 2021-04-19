import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useShoppingItems } from '../context/Providers/ShoppingItemsProvider'
import Item from './Item'

const Shopping = ({navigation, route}) => {
    const { shoppingItems, error, hasError, isLoading } = useShoppingItems()
    if (isLoading) return <View style={styles.indicatorContainer}><ActivityIndicator size="large" color="lightblue" animating /></View>
    if (hasError) return <View style={styles.indicatorContainer}><Text style={styles.errorText}>{error.name}: {error.message}</Text></View>
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

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 20,
    }
})
