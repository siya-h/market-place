import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import {  Card, Title, Button } from 'react-native-paper'
import { addToCart } from '../context/actions/actions'
import { UseCartContext } from '../context/Providers/CartProvider'

const Item = ({item: {title, image, price, id}}) => {
    const navigation = useNavigation()
    const { dispatch } = UseCartContext()
    const addItemToCart = () => {
        dispatch(addToCart({title, image, price, id}))
    }
    return (
    <Card style={styles.card} elevation={1} onPress={() => navigation.navigate('Product Details', {id})}>
        <Card.Content>
          <Title>{title}</Title>
        </Card.Content>
        <View style={styles.imageWrapper}><Image style={styles.image} resizeMode="contain" source={{ uri: image }} /></View>
        <Card.Actions style={styles.cardAction}>
            <Text style={styles.priceText}>R {price}</Text>
            <Button mode="contained" color="dodgerblue" dark icon="cart-plus" onPress={addItemToCart} />
        </Card.Actions>
    </Card>
    )
}

export default Item

const styles = StyleSheet.create({
    card: {
        margin: 5,
    },
    image: {
        width: '100%',
        height: 300,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        margin: 3
    },
    cardAction: {
        flex: 1,
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 20
    }
})
