import { NavLink } from "react-router-dom";
import { BannersCarrousel } from "./BannersCarrousel";
import { TrademarksCarrousel } from "./TrademarksCarrousel";


export const Index = () => {

    return (
        <>
            <div className="container">
                <header className="my-4">
                    <h1 className="py-2">Nicode SmartShop,</h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary fs-5">Encuentra los mejores productos al mejor precio</h4>
                </header>
                <div className="my-3 py-2">
                    <TrademarksCarrousel />
                </div>
                <div className="d-flex align-items-center justify-content-center m-4">
                </div>
                <section className="my-4">
                    <h2 className="my-2 py-3">Explora Nuestra Selección</h2>
                    <p>Descubre una amplia variedad de productos de alta calidad. Desde tecnología innovadora hasta moda elegante, tenemos lo que necesitas.</p>
                    <p>Explora nuestra tienda y encuentra ofertas exclusivas que se adaptan a tus necesidades y estilo de vida.</p>
                    <NavLink className="link-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/catalog">Explorar 🚀</NavLink>
                </section>
                <BannersCarrousel />
            </div >
        </>
    );
}