import { ShopListView } from "../components/ShopListView"



export const ShopPage = ({ handlerAddProductToCart }) => {


    return (
        <>
            <ShopListView
                handlerAddProductToCart={handlerAddProductToCart} />
        </>
    )
}