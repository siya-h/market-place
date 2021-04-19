import React, { createContext, useContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer'

const CartContext = createContext()

export const UseCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, [])
    const value = {
        dispatch,
        state
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
