import { useShopItems } from "./components/hooks/useShopItems"
import { ShopRoutes } from "./routes/ShopRoutes";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginReducer } from "./auth/reducers/loginReducer";
import { useAuth } from "./auth/hooks/useAuth";

export const CartApp = () => {
    const {
        cartItems,
        handlerUpdateQuantity,
        handlerAddProductToCart,
        handlerRemoveProductFromCart,
    } = useShopItems();

    const {
        login,
        initialLoginForm,
        dispatch,
        handlerLogin,
        handlerLogout
    } = useAuth();

    return (
        <>
            <Navbar
                itemsQuantity={cartItems.length}
                isAuth={login.isAuth}
                handlerLogout={handlerLogout} />
            <main>
                <div className="container">
                    <ShopRoutes
                        cartItems={cartItems}
                        handlerAddProductToCart={handlerAddProductToCart}
                        handlerRemoveProductFromCart={handlerRemoveProductFromCart}
                        handlerUpdateQuantity={handlerUpdateQuantity}
                        handlerLogin={handlerLogin}
                        initialLoginForm={initialLoginForm}
                        login={login}
                        dispatch={dispatch} />
                </div>
            </main>
            <Footer />
        </>
    )
}