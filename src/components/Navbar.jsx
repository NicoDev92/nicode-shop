import { NavLink } from "react-router-dom";


export const Navbar = ({ itemsQuantity }) => {

    return (
        <>
            <nav className="navbar navbar-dark bg-dark sticky-sm-top" >
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <NavLink className="navbar-brand" to="/index">Nicode SmartShop</NavLink>
                        <div className="navbar-shop-item  position-relative">
                            <NavLink
                                to="/cart">
                                <span className="material-symbols-outlined text-light d-flex align-items-center fs-3">
                                    shopping_cart
                                </span>
                                {itemsQuantity == 0 ?
                                    <span className="items-quantity position-absolute top-0 start-100 translate-middle">
                                        😃
                                    </span> :
                                    <span className="items-quantity position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                        {itemsQuantity}
                                    </span>
                                }
                            </NavLink>
                        </div>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="material-symbols-outlined text-light">
                            menu_open
                        </span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Nicode SmartShop</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body p-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 my-4">
                                <li className="my-2 p-2 px-4 menu-item">
                                    <NavLink className="dropdown-item px-4" to="/">Inicio</NavLink>
                                </li>
                                <li className="my-2 p-2 px-4 menu-item">
                                    <NavLink className="dropdown-item px-4" to="/catalog">Catálogo</NavLink>
                                </li>
                                <li className="my-2 p-2 px-4 menu-item">
                                    <NavLink className="dropdown-item px-4" to="/cart">Tu carrito!</NavLink>
                                </li>
                                <li className="my-2 p-2 px-4 menu-item">
                                    <NavLink className="dropdown-item px-4" to="/cart">Iniciar sesión</NavLink>
                                </li>
                                <li className="my-2 p-2 px-4 menu-item">
                                    <NavLink className="dropdown-item px-4" to="/cart">Regístrate!</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-success" type="submit">Search</button>
                                    </form>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}