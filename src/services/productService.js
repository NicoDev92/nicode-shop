


export const getProducts = async () => {
    try {//`${import.meta.env.VITE_SHOP_API_BASE_URL}/all/products`
        const response = await fetch('https://shop-store-api.onrender.com/api/all/products',);
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error getting products: ', error);
        throw error;
    }
}

export const getProductsPaged = async (page, elementsPerPage) => {
    try {
        //`${import.meta.env.VITE_SHOP_API_BASE_URL}/paged-products?page=${page}&elements=${elementsPerPage}`
        const response = await fetch(
            `https://shop-store-api.onrender.com/api/paged-products?page=${page}&elements=${elementsPerPage}`
        );
        const products = await response.json();
        return products
    } catch (error) {
        console.error('Error getting paged products: ', error);
        throw error;
    }
};

export const searchProductsPaged = async (keyword, page, elementsPerPage) => {
    try {
        //`${import.meta.env.VITE_SHOP_API_BASE_URL}/products/search/${keyword}?page=${page}&elements=${elementsPerPage}`
        const response = await fetch(
            `https://shop-store-api.onrender.com/api/products/search/${keyword}?page=${page}&elements=${elementsPerPage}`
        );
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error getting paged products: ', error);
        throw error;
    }
};

export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce(
        (accumulator, item) =>
            accumulator + (item.product.price * item.quantity),
        0)
}