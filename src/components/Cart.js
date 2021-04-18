import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Card, Title } from 'react-native-paper'
import { UseCartContext } from '../context/Providers/CartProvider'
import CartItem from './CartItem'

const Cart = ({navigation}) => {
    const { state } = UseCartContext()
    console.log(state)
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.cardTitle}>Items</Title>
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
    }
})
