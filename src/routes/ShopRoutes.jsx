import { Navigate, Route, Routes } from "react-router-dom"
import { ShopPage } from "../pages/ShopPage"
import { CartPage } from "../pages/CartPage"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { Footer } from "../components/layout/Footer"
import { Navbar } from "../components/layout/Navbar"
import { useSelector } from "react-redux"

export const ShopRoutes = () => {

    const { isLoadingLogin } = useSelector(state => state.auth)

    if (isLoadingLogin) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <div className="loader"></div>
            </div >
        )
    }
    return (
        <>

            <Navbar />

            <Routes>
                <Route path="index" element={<HomePage />} />

                <Route path="/" element={<Navigate to={'/index'} />} />

                <Route path="catalog" element={<ShopPage />} />

                <Route path="cart" element={<CartPage />} />

                <Route path="register" element={<RegisterPage />} />

                <Route path="login" element={<LoginPage />} />

            </Routes>

            <Footer />

        </>
    )
}