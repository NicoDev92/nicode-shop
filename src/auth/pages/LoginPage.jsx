import { useEffect, useReducer, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = ({ login, handlerLogin, initialLoginForm }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const navigate = useNavigate()

    useEffect(() => {
        if (login.isAuth) {
            navigate("/");
        }
    }, [login.isAuth]);

    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!password) {
            Swal.fire({
                icon: "error",
                text: "El campo de 'contraseña' esta vacío!",
            });
            return;
        }
        if (!username) {
            Swal.fire({
                icon: "error",
                text: "El campo de 'usuario' esta vacío!",
            });
            return;
        }

        handlerLogin({ username, password });

        setLoginForm(initialLoginForm);
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="container d-inline-flex justify-content-center align-items-center">
                <div className="card m-4 p-4 w-50 w-md-75">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">
                                Usuario o E-mail
                            </label>
                            <input
                                type="text"
                                id="usernameInput"
                                className="form-control w-100"
                                name="username"
                                value={username}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                Contraseña
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="passwordInput"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm fw-bold fs-6 d-flex align-items-center no-shadow"
                                    name="password"
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {showPassword ? <ion-icon name="eye-off-outline"></ion-icon> : <ion-icon name="eye-outline"></ion-icon>}
                                </button>
                            </div>
                            <div id="passwordHelp" className="form-text fs-7">
                                Nunca compartas tu contraseña con nadie.
                            </div>
                        </div>
                        <div className="w-100 d-inline-flex justify-content-center align-items-center my-4">
                            <button type="submit" className="btn btn-primary w-75">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                    <div className="card-footer text-body-secondary text-end">
                        <p className="fs-7">No tienes una cuenta? Registrate <NavLink to="/register">aquí.</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );
};
