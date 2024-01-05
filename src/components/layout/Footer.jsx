

export const Footer = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body mt-4 flex-end" data-bs-theme="dark">
                <div className="row text-light w-100">
                    <div className="col navbar-nav flex-grow-1 m-4">
                        <h3 className="fs-5 text-center">Nicode 2023</h3>

                        <p className="fs-7 p-4">Nicode SmartShop es un proyect ficticio,
                            a fin de demostrar habilidades en React JS, HTML, CSS, JAVA - Spring.
                            Ningún producto aquí mostrado es existente al igual que sus valores comerciales.</p>
                    </div>
                    <div className="col">
                        <ul className="navbar-nav justify-content-end flex-grow-1 my-4">
                            <p className="text-center">No dudes en ponerte en contacto!</p>
                            <a className="text-light link-underline-light link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="https://www.linkedin.com/in/alenolmedo92"
                                target="_blank"
                                rel="noreferrer">
                                <li className="my-2 p-2 px-4 d-flex align-items-center text-center">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    Linkedin
                                </li>
                            </a>
                            <a className="text-light link-underline-light link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="https://github.com/NicoDev92"
                                target="_blank"
                                rel="noreferrer">
                                <li className="my-2 p-2 px-4 d-flex align-items-center">
                                    <ion-icon name="logo-github"></ion-icon>
                                    Github
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}