import { useEffect, useReducer } from "react";
import { AddProductToCart, AddQuantityProductToCart, RemoveProductFromCart, UpdateQuantityProductToCart } from "../../reducers/itemsReducerActions";
import { itemsReducer } from "../../reducers/itemsReducer";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
export const useShopItems = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductToCart = (product) => {
        const hasItem = cartItems.find((item) => item.product.id === product.product.id);
        if (hasItem) {
            dispatch({
                type: UpdateQuantityProductToCart,
                payload: product,
            });
        } else {
            dispatch({
                type: AddProductToCart,
                payload: product,
            });
        }
    }

    const handlerUpdateQuantity = (product, increment) => {
        let quantity = parseInt(product.quantity) + increment;
        product.quantity = quantity;
        if (product.quantity < 1) {
            dispatch({
                type: RemoveProductFromCart,
                payload: product.product.id,
            });
            return;
        }
        dispatch({
            type: AddQuantityProductToCart,
            payload: product,
        });
    };

    const handlerRemoveProductFromCart = (id) => {
        dispatch({
            type: RemoveProductFromCart,
            payload: id,
        });
    }
    return {
        cartItems,
        handlerUpdateQuantity,
        handlerAddProductToCart,
        handlerRemoveProductFromCart,
    }
}