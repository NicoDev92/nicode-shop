import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    updateQuantityProductToCart,
    addQuantityProductToCart,
    removeProductFromCart,
} from "../../store/slices/shop/shopSlice";

export const useShopItems = () => {
    const { products: cartItems } = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductToCart = (product) => {
        const hasItem = cartItems.find((item) => item.product.id === product.product.id);
        if (hasItem) {
            dispatch(updateQuantityProductToCart(product));
        } else {
            dispatch(addProductToCart(product));
        }
    };

    const handlerUpdateQuantity = (product, increment) => {
        let quantity = parseInt(product.quantity) + increment;
        product.quantity = quantity;
        if (product.quantity < 1) {
            dispatch(removeProductFromCart(product.product.id));
        } else {
            dispatch(updateQuantityProductToCart({ ...product, quantity: quantity }));
        }
    };

    const handlerRemoveProductFromCart = (id) => {
        dispatch(removeProductFromCart(id));
    };


    return {
        cartItems,
        handlerUpdateQuantity,
        handlerAddProductToCart,
        handlerRemoveProductFromCart,
    };
};
