import { ACTIONS } from "../actions/actions";

export const cartReducer = (state, {type, payload}) => {
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            return [...state, payload.item]
        default:
            return state;
    }
}

export default cartReducer