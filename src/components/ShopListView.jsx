import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ShopItem } from "./ShopItem";
import { TrademarksCarrousel } from "./layout/TrademarksCarrousel";


export const ShopListView = ({ handlerAddProductToCart }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllProducts = async () => {
        const productList = await getProducts();
        setProducts(productList)
        setIsLoading(false);
    }


    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>{isLoading &&
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <div className="loader"></div>
            </div >
        }
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