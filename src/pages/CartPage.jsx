import { CartView } from "../components/CartView"


export const CartPage = ({ cartItems, handlerRemoveProductFromCart, handlerUpdateQuantity }) => {

    return (
        <>
            <CartView
                cartItems={cartItems}
                handlerRemoveProductFromCart={handlerRemoveProductFromCart}
                handlerUpdateQuantity={handlerUpdateQuantity} />
        </>
    )
}