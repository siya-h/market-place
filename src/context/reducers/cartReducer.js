import { ACTIONS } from "../actions/actions";

export const cartReducer = (state, {type, payload}) => {
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            let isDuplicate = false
            const newState = state.map((cartItem) => {
                if (payload.item.id === cartItem.id){
                    isDuplicate = true
                }
                return  cartItem
            })
            if (isDuplicate) return newState
            return [...state, payload.item]
        case  ACTIONS.CLEAR_CART:
            return []
        case ACTIONS.REMOVE_TODO: 
            const newCart = state.filter((item) => {
                return item.id !== payload.id 
            })
            return newCart
        default:
            return state;
    }
}

export default cartReducer