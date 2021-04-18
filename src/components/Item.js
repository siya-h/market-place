import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button, Card, Title } from 'react-native-paper'
import { addToCart } from '../context/actions/actions'
import { UseCartContext } from '../context/Providers/CartProvider'

const Item = ({item: {title, image, price, id}}) => {
    const { dispatch }  = UseCartContext()
    const addItemToCart = () => {
        dispatch(addToCart({title, image, price, id}))
    }
    return (
    <Card style={styles.card} elevation={1}>
        <Card.Content>
          <Title>{title}</Title>
        </Card.Content>
        <Card.Cover style={styles.image} source={{ uri: image }} />
        <Card.Actions style={styles.cardAction}>
        <Text style={styles.priceText}>R {price}</Text>
          <Button mode="contained" color="lightgreen" dark icon="plus" onPress={addItemToCart} />
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
        height: 350
    },
    cardAction: {
        flex: 1,
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 20
    }
})
