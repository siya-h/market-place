import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import { removeCartItem } from '../context/actions/actions'
import { UseCartContext } from '../context/Providers/CartProvider'

const CartItem = ({ item: {title, id, image, price }}) => {
    const {dispatch} = UseCartContext()
    const removeItem = () => {
        dispatch(removeCartItem(id))
    }
    return (
        <>
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} resizeMode="contain"/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>R {price}</Text>
            <Icon name="trash" type="font-awesome-5" style={styles.button} color="red" onPress={removeItem}/>
            
        </View>
        <Divider style={styles.divider}/>
        </>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    image: {
        width: '15%',
        height: '100%',
    },
    title: {
        width: '55%',
        textAlign: 'center'
    },
    price: {
        width: '20%',
        textAlign: 'center'
    },
    divider: {
        backgroundColor: 'lightgrey'
    }
})
