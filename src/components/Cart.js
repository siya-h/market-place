import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { FlatList, Platform, StyleSheet } from 'react-native'
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
    if (state.length === 0 ) return <View style={styles.emptyCartWrapper}><Text style={styles.emptyCartText}>Cart is empty!</Text></View>
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.cardTitle}>Items</Title>
                <Paragraph style={styles.totalParagraph}>Total: R {cartTotal}</Paragraph>
                <Button  mode="contained" style={styles.clearCart} color="crimson" onPress={cartClear}>Clear cart</Button>
                <FlatList 
                    data={state}
                    renderItem={({item}) => <CartItem item={item}/>}
                    keyExtractor={item => item.id.toString()}
                    style={styles.itemsList}
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
    },
    emptyCartWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 20
    },
    itemsList: {
        marginBottom: 100,
    }
})
