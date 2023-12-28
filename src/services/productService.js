import { products } from "../data/products"


export const getProducts = () => {
    return products;
}

export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce(
        (accumulator, item) =>
            accumulator + (item.product.price * item.quantity),
        0)
}