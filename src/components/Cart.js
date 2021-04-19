import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Platform } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import { clearCart } from '../context/actions/actions'
import { UseCartContext } from '../context/Providers/CartProvider'
import CartItem from './CartItem'

const Cart = () => {
    const { state, dispatch } = UseCartContext()
    const cartClear = () => {
        dispatch(clearCart())
    }
    const cartTotal = state.reduce((total, item) => {
        return total + item.price
    }, 0)
    const platform = Platform.OS
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.cardTitle}>Items</Title>
                <Paragraph style={styles.totalParagraph}>Total: R {cartTotal}</Paragraph>
                <Button  mode="contained" style={styles.clearCart} color="red" onPress={cartClear}>Clear cart</Button>
                <FlatList 
                    data={state}
                    renderItem={({item}) => <CartItem item={item}/>}
                    keyExtractor={item => item.id.toString()}
                />
            </Card.Content>
        </Card>
    )
}

export default Cart

const styles = StyleSheet.create({
    card: {
        margin: 5,
        flex: 1
    },
    cardTitle: {
        textAlign: 'center'
    },
    clearCart: {
        marginTop: 5,
        marginBottom: 5
    },
    totalParagraph: {
        fontSize: 20
    }
})
