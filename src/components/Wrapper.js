import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ShoppingItemsProvider from '../context/Providers/ShoppingItemsProvider';
import CartProvider from '../context/Providers/CartProvider';

export default function Wrapper({children}) {
    const platform = Platform.OS

  return (
    <NavigationContainer>
        <StatusBar backgroundColor={platform === 'ios'? 'white': 'black' } barStyle={platform === 'ios' ? 'dark-content' : 'light-content'}/>

      {/* <SafeAreaView style={styles.container}> */}
      <CartProvider>
        <ShoppingItemsProvider>
                {children}
        </ShoppingItemsProvider>
        </CartProvider>
      {/* </SafeAreaView> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
