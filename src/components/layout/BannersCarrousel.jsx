

export const BannersCarrousel = () => {
    return (
        <>
            <div className="container">
                <div className="container d-inline-flex align-items-center justify-content-center">
                    <div id="carouselExampleAutoplaying" className="carousel carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2500">
                                <img src="/assets/banner-space-series.jpeg" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <img src="/assets/BannerPersonalizaTuPC.webp" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <img src="/assets/pcgamerbanner-scaled.webp" className="d-block banner-carrousel-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}