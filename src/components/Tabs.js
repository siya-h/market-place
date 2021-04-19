import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import { UseCartContext } from '../context/Providers/CartProvider';
import Cart from './Cart';
import Shopping from './Shopping';
const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
    const { state } = UseCartContext()
    return (
        <Tab.Navigator barStyle={{backgroundColor: 'lightblue', paddingBottom
        : 0}} inactiveColor="grey" activeColor="black" tabBarOptions={{activeTintColor: 'black', activeBackgroundColor: 'lightgrey' }} >
            <Tab.Screen name="Shopping" component={Shopping} options={{tabBarIcon: ({color}) => <Icon name="store" color={color}/> }} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: ({color}) => <Icon name="shopping-cart" color={color} />, tabBarBadge: state.length}} /> 
        </Tab.Navigator>
        
    )
}

export default Tabs

