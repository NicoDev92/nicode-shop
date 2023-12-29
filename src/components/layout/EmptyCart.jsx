import { NavLink } from "react-router-dom"


export const EmptyCart = () => {
    return (
        <>
            <div className="alert alert-info text-center mt-5 d-flex flex-column align-items-center justify-content-center" role="alert">
                <div>Aun no hay Productos en tu carrito!</div>
                <NavLink
                    className="btn btn-info w-50 text-light fw-semibold d-inline-flex align-items-center justify-content-center mt-4"
                    to="/catalog">
                    ver Catálogo
                    <span className="material-symbols-outlined">
                        shop_two
                    </span>
                </NavLink>
            </div>
        </>
    )
}