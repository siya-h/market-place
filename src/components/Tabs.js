import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopping from './Shopping';
import Cart from './Cart';
import { Button } from 'react-native-paper';
import { UseCartContext } from '../context/Providers/CartProvider';


const Tab = createBottomTabNavigator()

const Tabs = () => {
    const { state } = UseCartContext()
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: 'black', activeBackgroundColor: 'lightgrey'}} >
            <Tab.Screen name="Shopping" component={Shopping} options={{tabBarIcon: ({color}) => <Button icon="storefront-outline" color={color}/>}} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: ({color}) => <Button icon="cart" color={color} />, tabBarBadge: state.length}} />
        </Tab.Navigator>
        
    )
}

export default Tabs
