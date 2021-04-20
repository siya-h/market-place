import { useScrollToTop } from '@react-navigation/native'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useShoppingItems } from '../context/Providers/ShoppingItemsProvider'
import Item from './Item'

const Shopping = () => {
    const { shoppingItems, error, hasError, isLoading } = useShoppingItems()
    const ref = useRef(null)
    useScrollToTop(ref)
    if (isLoading) return <View style={styles.indicatorContainer}><ActivityIndicator size="large" color="lightblue" animating /></View>
    if (hasError) return <View style={styles.indicatorContainer}><Text style={styles.errorText}>{error.name}: {error.message}</Text></View>
    return (
                <FlatList 
                    ref={ref}
                    data={shoppingItems} 
                    renderItem={({item}) => <Item item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
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
