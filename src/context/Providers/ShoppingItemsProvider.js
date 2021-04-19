import axios from 'axios';
import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const ShoppingItemsContext = createContext()

export const useShoppingItems = () => useContext(ShoppingItemsContext)

const ShoppingItemsProvider = ({children}) => {
    const [shoppingItems, setShoppingItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState({})
    useEffect(() => {
        const url = 'https://fakestoreapi.com/products/'
        let isMounted = true;
        if (isMounted){
            axios.get(url)
            .then(({data}) => {
                setShoppingItems(data)
            })
            .catch((e) => {
                setError(e)
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
        return () => {
            isMounted = false
        }
    }, [])
    const value = {
        shoppingItems
    }
    if (isLoading) return <View style={styles.indicatorContainer}><ActivityIndicator size="large" color="lightblue" animating /></View>
    if (hasError) return <View style={styles.indicatorContainer}><Text>{error.name}: {error.message}</Text></View>
    return (
        <ShoppingItemsContext.Provider value={value}>
            {children}
        </ShoppingItemsContext.Provider>
    )
}

export default ShoppingItemsProvider

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


