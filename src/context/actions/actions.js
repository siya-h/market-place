export const ACTIONS = {
    ADD_TO_CART : 'ADD_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_TODO: 'REMOVE_TODO'
}

export const addToCart = (item) =>  ({type: ACTIONS.ADD_TO_CART, payload: {item}})

export const clearCart = () => ({type: ACTIONS.CLEAR_CART})

export const removeCartItem = (id) => ({type: ACTIONS.REMOVE_TODO, payload: {id}})