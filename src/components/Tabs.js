import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import React from 'react';
import { Icon } from 'react-native-elements';
import { UseCartContext } from '../context/Providers/CartProvider';
import Cart from './Cart';
import Shopping from './Shopping';
const Tab = createMaterialBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator()

const Tabs = () => {
    const { state } = UseCartContext()
    const iconType = "font-awesome-5"
    return (
        <Tab.Navigator barStyle={{backgroundColor: 'lightblue'}}
         inactiveColor="grey" 
         shifting
         activeColor="black" 
         tabBarOptions={{
             activeTintColor: 'black', 
             activeBackgroundColor: 'lightgrey',
             }}
            
          >
            <Tab.Screen name="Shopping" component={Shopping} options={{tabBarIcon: ({color}) => <Icon name="shopping-basket" type={iconType} color={color}/>}} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: ({color}) => <Icon name="shopping-cart" type={iconType} color={color} />, tabBarBadge: state.length }} /> 
        </Tab.Navigator>
        
    )
}

export default Tabs

