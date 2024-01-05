import { useContext } from "react"
import { CartView } from "../components/CartView"
import { ShopItemsContext } from "../context/ShopItemsContext"


export const CartPage = () => {

    return (
        <>
            <CartView />
        </>
    )
}