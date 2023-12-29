


export const getProducts = async () => {
    const response = await fetch('http://localhost:7070/api/products')
    const products = await response.json();
    return products;
}

export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce(
        (accumulator, item) =>
            accumulator + (item.product.price * item.quantity),
        0)
}