import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView"
import { ShopListView } from "./components/ShopListView"
import { useShopItems } from "./components/hooks/useShopItems"
import { Navbar } from "./components/Navbar";
import { Index } from "./components/Index";

export const CartApp = () => {
    const {
        cartItems,
        handlerUpdateQuantity,
        handlerAddProductToCart,
        handlerRemoveProductFromCart,
    } = useShopItems();

    return (
        <>
            <Navbar
                itemsQuantity={cartItems.length} />
            <div className="container">
                <Routes>
                    <Route path="catalog" element={<ShopListView handlerAddProductToCart={handlerAddProductToCart} />} />
                    <Route path="cart" element={(cartItems?.length > 0 ?
                        <div className="my4">
                            <CartView
                                cartItems={cartItems}
                                handlerRemoveProductFromCart={handlerRemoveProductFromCart}
                                handlerUpdateQuantity={handlerUpdateQuantity}
                            />
                        </div>
                        :
                        <div className="alert alert-info text-center mt-5 d-flex flex-column align-items-center justify-content-center" role="alert">
                            <div>Aun no hay Productos en tu carrito!</div>
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>
                            <NavLink
                                className="btn btn-info w-50 text-light fw-semibold d-flex align-items-center justify-content-center mt-4"
                                to="/catalog">
                                ver Catálogo
                                <span className="material-symbols-outlined">
                                    shop_two
                                </span>
                            </NavLink>
                        </div>
                    )} />
                    <Route path="index" element={<Index />} />
                    <Route path="/" element={<Navigate to={'/index'} />} />
                </Routes>
            </div>
        </>
    )
}