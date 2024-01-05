import { useShopItems } from "../components/hooks/useShopItems";
import { ShopItemsContext } from "./ShopItemsContext"


export const ShopItemsProvider = ({ children }) => {
    const {
        cartItems,
        handlerUpdateQuantity,
        handlerAddProductToCart,
        handlerRemoveProductFromCart,
    } = useShopItems();

    return (
        <ShopItemsContext.Provider
            value={
                {
                    cartItems,
                    handlerUpdateQuantity,
                    handlerAddProductToCart,
                    handlerRemoveProductFromCart,
                }
            }>
            {children}
        </ShopItemsContext.Provider>
    )

}