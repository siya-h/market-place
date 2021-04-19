import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopping from './Shopping';
import Cart from './Cart';
import { Icon } from 'react-native-elements';
import { UseCartContext } from '../context/Providers/CartProvider';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
    const { state } = UseCartContext()
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: 'black', activeBackgroundColor: 'lightgrey'}} >
            <Tab.Screen name="Shopping" component={Shopping} options={{tabBarIcon: ({color}) => <Icon name="store" color={color}/> }} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: ({color}) => <Icon name="shopping-cart" color={color} />, tabBarBadge: state.length}} />
        </Tab.Navigator>
        
    )
}

export default Tabs
