import { NavLink } from "react-router-dom"


export const EmptyCart = () => {
    return (
        <>
            <div className="alert alert-info text-center m-auto w-75 d-flex flex-column align-items-center justify-content-center" role="alert">
                <div>Aun no hay Productos en tu carrito!</div>
                <NavLink
                    className="w-50 text-dark fw-semibold d-inline-flex align-items-center justify-content-center mt-4 link-underline-dark link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
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