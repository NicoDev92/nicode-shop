import { useState } from "react";
import Swal from "sweetalert2";

export const ShopItem = ({ product, handlerAddProductToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [iconAnimation, setIconAnimation] = useState(false);

    const {
        id,
        name,
        description,
        price,
        stock,
        imagePath
    } = product ?? {};

    const onAddProductToCart = () => {
        const productToAdd = {
            id,
            name,
            description,
            price,
            stock,
            imagePath,
        };

        handlerAddProductToCart({
            product: productToAdd,
            quantity,
        });

        setIconAnimation(true);
        let timerInterval;
        Swal.fire({
            title: "Item agregado al Carrito!",
            timer: 1000,
            icon: "success",
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
        setTimeout(() => {
            setIconAnimation(false);
        }, 1000);
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 1;
        if (newQuantity > stock) {
            Swal.fire({
                icon: "error",
                title: "La cantidad ingresada supera el stock!"
            });
            return;
        }
        setQuantity(newQuantity);
    };

    return (
        <>
            <div className="card m-3 p-2 w-75 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <img src={imagePath} className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text m-1">{description}</p>
                            <p className="card-text m-1 fw-semibold">${price}</p>
                            {(stock < 6 && stock != 0) && <p className="text-success">¡Últimas Existencias!</p>}
                            <p className={`card-text m-1 ${stock === 0 ? 'text-danger' : ''}`}>Stock: {stock}</p>
                            {stock != 0 &&
                                <div>
                                    <label htmlFor={`quantity-${id}`} className="form-label">Cantidad:</label>
                                    <div className="mb-3 d-flex">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control w-0"
                                                id={`quantity-${id}`}
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                min="1"
                                                max={stock}
                                            />
                                            <button
                                                className="btn btn-primary btn-sm d-flex align-items-center justify-content-center no-shadow"
                                                onClick={onAddProductToCart}
                                            >
                                                <span className={`material-symbols-outlined ${iconAnimation ? 'icon-animation-add' : ''}`}>
                                                    add_shopping_cart
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
