import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import ShoppingItemsProvider from '../context/Providers/ShoppingItemsProvider';
import CartProvider from '../context/Providers/CartProvider';

export default function Wrapper({children}) {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
      <CartProvider>
        <ShoppingItemsProvider>
                {children}
        </ShoppingItemsProvider>
        </CartProvider>
      </SafeAreaView>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
