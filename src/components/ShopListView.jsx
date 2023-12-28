import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ShopItem } from "./ShopItem";
import { BannersCarrousel } from "./BannersCarrousel";


export const ShopListView = ({ handlerAddProductToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="col m-4">
                {products.map((product) => (
                    <div className="row"
                        key={product.id}>
                        <ShopItem
                            product={product}
                            handlerAddProductToCart={handlerAddProductToCart} />
                    </div>
                ))}
            </div>

            <BannersCarrousel />
        </>
    );
}