import { useContext } from "react"
import { ShopListView } from "../components/ShopListView"
import { ShopItemsContext } from "../context/ShopItemsContext";
import { useShopItems } from "../components/hooks/useShopItems";



export const ShopPage = () => {

    const { handlerAddProductToCart } = useShopItems(); //se cambia useContext(ShopItemsContext) por  useShopItems()
    return (
        <>
            <ShopListView
                handlerAddProductToCart={handlerAddProductToCart} />
        </>
    )
}