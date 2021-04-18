import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper'

const CartItem = ({ item: {title, id, image, price }}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>R {price}</Text>
            <Button icon="delete" color="red" style={styles.button} />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    image: {
        width: 50,
        height: 50
    },
    title: {
        width: '60%'
    },
    price: {
        width: '15%'
    },
    button: {
        width: '5%'
    }
})
