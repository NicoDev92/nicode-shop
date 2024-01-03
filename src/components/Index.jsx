import { NavLink } from "react-router-dom";
import { BannersCarrousel } from "./layout/BannersCarrousel";
import { TrademarksCarrousel } from "./layout/TrademarksCarrousel";


export const Index = () => {

    return (
        <>
            <div className="container">
                <header className="my-4">
                    <h1 className="py-2">
                        Nicode SmartShop,
                    </h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary fs-5">
                        Encuentra los mejores productos al mejor precio
                    </h4>
                </header>
                <section className="my-4">
                    <p>
                        ¡Bienvenido a nuestra tienda online especializada en hardware y tecnología! En nuestro amplio
                        catálogo, encontrarás una cuidada selección de productos que abarcan desde cámaras de seguridad
                        hasta fuentes de alimentación para PC y repuestos oficiales de hardware. Nos enorgullece ofrecer
                        a nuestros clientes productos de la más alta calidad y de las marcas más reconocidas en el mundo
                        de la tecnología.
                    </p>
                </section>
                <div className="my-3 py-2">
                    <TrademarksCarrousel />
                </div>
                <div className="d-flex align-items-center justify-content-center m-4">
                </div>
                <section className="my-4">
                    <h2 className="my-2 py-3">Explora Nuestra Selección</h2>
                    <p>
                        En nuestra tienda, no solo encontrarás productos excepcionales, sino también información
                        detallada y asesoramiento técnico para ayudarte a tomar decisiones informadas.
                        Estamos aquí para hacer que tu experiencia de compra sea fácil, emocionante y, sobre todo,
                        satisfactoria.
                    </p>
                    <p>
                        Explora nuestra tienda y descubre soluciones innovadoras para tus necesidades de hardware.
                        Ya seas un entusiasta de la tecnología o estés buscando mejorar la seguridad de tu hogar,
                        contamos con una variedad de productos que se adaptan a cada estilo de vida. Nuestro compromiso
                        es brindarte una experiencia de compra cómoda y segura, respaldada por un equipo dedicado a ofrecer
                        el mejor servicio.
                    </p>
                    <NavLink className="link-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/catalog">Explorar 🚀</NavLink>
                </section>
                <div className="d-flex align-items-center justify-content-center">
                    <BannersCarrousel />
                </div>

                <section className="my-4">
                    <p>Descubre el mundo del hardware con nosotros y lleva tu tecnología al siguiente nivel.
                        ¡Gracias por elegirnos como tu destino de confianza para todas tus necesidades de hardware!</p>
                </section>
            </div >
        </>
    );
}