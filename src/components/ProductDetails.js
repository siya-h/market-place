import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import { useShoppingItems } from '../context/Providers/ShoppingItemsProvider'

const ProductDetails = ({route}) => {
    const { shoppingItems } = useShoppingItems()
    const { id } = route.params
    const [product] = shoppingItems.filter((item) => id === item.id )
    const {title, image, description, price} = product
    return (
        <Card style={styles.container}>
        <Card.Content>
          <Title>{title} - R {price}</Title>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Cover style={styles.image} source={{ uri: image }} onProgress={() => <ActivityIndicator color="red" size="large"/>} />
      </Card>
    )
}

export default ProductDetails


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    image: {
        height: 320,
        
    }
})