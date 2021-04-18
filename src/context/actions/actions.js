export const ACTIONS = {
    ADD_TO_CART : 'ADD_TO_CART'
}

export const addToCart = (item) =>  ({type: ACTIONS.ADD_TO_CART, payload: {item}})
 