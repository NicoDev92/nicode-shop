import { AddProductToCart, AddQuantityProductToCart, RemoveProductFromCart, UpdateQuantityProductToCart } from "./itemsReducerActions";


export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProductToCart:
            return [
                ...state,
                {
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                }
            ];
        case UpdateQuantityProductToCart:
            return state.map((item) => {
                if (item.product.id === action.payload.product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + action.payload.quantity,
                    };
                }
                return item;
            });
        case AddQuantityProductToCart:
            return state.map((item) => {
                if (item.product.id === action.payload.product.id) {
                    return {
                        ...item,
                    };
                }
                return item;
            });

        case RemoveProductFromCart:
            return state.filter((item) => item.product.id !== action.payload);

        default:
            return state;
    }
}