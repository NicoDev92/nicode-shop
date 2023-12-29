import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ShopItem } from "./ShopItem";
import { TrademarksCarrousel } from "./layout/TrademarksCarrousel";


export const ShopListView = ({ handlerAddProductToCart }) => {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const productList = await getProducts();
        setProducts(productList)
    }


    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>
            <div>
                {products.map((product) => (
                    <div className="row"
                        key={product.id} >
                        <ShopItem
                            product={product}
                            handlerAddProductToCart={handlerAddProductToCart} />
                    </div>
                ))}
                <TrademarksCarrousel />
            </div >
        </>
    );
}