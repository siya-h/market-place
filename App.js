import 'react-native-gesture-handler';
import React from 'react';
import Wrapper from './src/components/Wrapper';
import Tabs from './src/components/Tabs';
import {createStackNavigator} from '@react-navigation/stack'
import ProductDetails from './src/components/ProductDetails';

const MainStack = createStackNavigator()

export default function App() {
  return (
    <Wrapper >
      <MainStack.Navigator screenOptions={{headerStyle: {backgroundColor: 'lightblue'}, headerTintColor: 'white'}}>
      <MainStack.Screen name="Market Square" >
        {() => (<Tabs />)}
      </MainStack.Screen>
      <MainStack.Screen name="Product Details" component={ProductDetails}/>
      </MainStack.Navigator>
    </Wrapper>

  );
}
