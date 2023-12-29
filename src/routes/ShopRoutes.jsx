import { Navigate, Route, Routes } from "react-router-dom"
import { ShopPage } from "../pages/ShopPage"
import { CartPage } from "../pages/CartPage"
import { HomePage } from "../pages/HomePage"
import { EmptyCart } from "../components/layout/EmptyCart"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../auth/pages/LoginPage"

export const ShopRoutes = ({
    handlerAddProductToCart,
    cartItems,
    handlerRemoveProductFromCart,
    handlerUpdateQuantity,
    initialLoginForm,
    login,
    dispatch,
    handlerLogin
}) => {

    return (
        <Routes>
            <Route path="index" element={<HomePage />} />

            <Route path="/" element={<Navigate to={'/index'} />} />

            <Route path="catalog" element={<ShopPage
                handlerAddProductToCart={handlerAddProductToCart} />} />

            <Route path="cart" element={(cartItems?.length > 0 ?
                <CartPage
                    cartItems={cartItems}
                    handlerRemoveProductFromCart={handlerRemoveProductFromCart}
                    handlerUpdateQuantity={handlerUpdateQuantity} />
                :
                <EmptyCart />
            )} />

            <Route path="register" element={<RegisterPage />} />

            <Route path="login" element={<LoginPage
                initialLoginForm={initialLoginForm}
                dispatch={dispatch}
                login={login}
                handlerLogin={handlerLogin} />} />

        </Routes>
    )
}