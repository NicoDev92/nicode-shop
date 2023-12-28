

export const BannersCarrousel = () => {
    return (
        <>
            <div className="container">
                <div className="container d-flex align-items-center justify-content-center">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./src/assets/banner-space-series.jpeg" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./src/assets/BannerPersonalizaTuPC.webp" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./src/assets/pcgamerbanner-scaled.webp" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}