import React, { useEffect, useState } from "react";
import { getProductsPaged, searchProductsPaged } from "../services/productService";
import { Pagination } from "react-bootstrap";
import { ShopItem } from "./ShopItem";
import { TrademarksCarrousel } from "./layout/TrademarksCarrousel";

const initialSearchInput = {
    searchTerm: "",
};

export const ShopListView = ({ handlerAddProductToCart }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchInput, setSearchInput] = useState(initialSearchInput);
    const elementsPerPage = 5;

    const { searchTerm } = searchInput;

    const getProductsPagedData = async () => {
        try {
            let response;
            if (searchTerm) {
                response = await searchProductsPaged(searchTerm, 0, elementsPerPage);
            } else {
                response = await getProductsPaged(currentPage, elementsPerPage);
            }
            setProducts(response.content);
            setTotalPages(response.totalPages);
            setIsLoading(false);
        } catch (error) {
            console.error('Error getting paged products: ', error);
            setIsLoading(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSearchChange = ({ target }) => {
        const { name, value } = target;
        setSearchInput({
            [name]: value,
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page - 1);
        scrollToTop();
    };

    useEffect(() => {
        getProductsPagedData();
    }, [searchInput]);

    useEffect(() => {
        getProductsPagedData();
    }, [currentPage]);

    return (
        <>
            {isLoading ? (
                <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="loader"></div>
                </div>
            ) : (
                <div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                            <form className="d-flex justify-content-center align-items-center m-3" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar..."
                                    aria-label="Search"
                                    id="searchInput"
                                    name="searchTerm"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <label htmlFor="searchInput">
                                    <div className="border bg-info rounded-circle p-1 m-2 fs-3 text-light fw-bold d-flex justify-content-center align-items-center">
                                        <ion-icon name="search"></ion-icon>
                                    </div>
                                </label>
                            </form>
                            <Pagination>
                                <Pagination.First
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 0}
                                />
                                <Pagination.Prev
                                    onClick={() => handlePageChange(currentPage)}
                                    disabled={currentPage === 0}
                                />
                                {[...Array(totalPages).keys()].map((page) => (
                                    <Pagination.Item
                                        key={page}
                                        active={page === currentPage}
                                        onClick={() => handlePageChange(page + 1)}
                                    >
                                        {page + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() => handlePageChange(currentPage + 2)}
                                    disabled={currentPage === totalPages - 1}
                                />
                                <Pagination.Last
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages - 1}
                                />
                            </Pagination>
                        </div>
                    </div>
                    {products.map((product) => (
                        <div className="row" key={product.id}>
                            <ShopItem
                                product={product}
                                handlerAddProductToCart={handlerAddProductToCart}
                            />
                        </div>
                    ))}
                    <div className="mt-3 d-flex justify-content-center">
                        <Pagination>
                            <Pagination.First
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 0}
                            />
                            <Pagination.Prev
                                onClick={() => handlePageChange(currentPage)}
                                disabled={currentPage === 0}
                            />
                            {[...Array(totalPages).keys()].map((page) => (
                                <Pagination.Item
                                    key={page}
                                    active={page === currentPage}
                                    onClick={() => handlePageChange(page + 1)}
                                >
                                    {page + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handlePageChange(currentPage + 2)}
                                disabled={currentPage === totalPages - 1}
                            />
                            <Pagination.Last
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages - 1}
                            />
                        </Pagination>
                    </div>
                    <TrademarksCarrousel />
                </div>
            )}
        </>
    );
};
