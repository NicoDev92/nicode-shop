import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../services/RegisterService";

const initialRegisterForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
}
export const RegisterPage = () => {

    const [registerForm, setRegisterForm] = useState(initialRegisterForm);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const {
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
    } = registerForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setRegisterForm({
            ...registerForm,
            [name]: value,
        });
    }

    const handleTogglePasswordVisibility = (field) => {
        if (field === "password") {
            setShowPassword(!showPassword);
        } else if (field === "confirmPassword") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const showErrorAlert = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
    };

    const handlerRegister = async (formData) => {
        const response = await registerUser(formData);
        if (response.success) {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
            });
            setRegisterForm(initialRegisterForm);
            navigate('/login');
        } else {
            showErrorAlert(response.message.error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName) {
            showErrorAlert("Debe completar con su nombre");
            return;
        }

        if (!lastName) {
            showErrorAlert("Debe completar con su apellido");
            return;
        }

        if (!dateOfBirth) {
            showErrorAlert("Debe completar su fecha de nacimiento");
            return;
        }

        if (!isValidEmail(email)) {
            showErrorAlert("Correo electrónico no válido");
            return;
        }

        if (!isValidPassword(password)) {
            showErrorAlert(
                "Contraseña no válida. Debe incluir letras y números, combinar mayúsculas y minúsculas, incluir caracteres especiales, tener al menos 8 caracteres y no contener espacios en blanco."
            );
            return;
        }

        if (password !== confirmPassword) {
            showErrorAlert("Las contraseñas no coinciden");
            return;
        }

        handlerRegister(registerForm);

    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    };

    return (
        <>
            <div className="container d-inline-flex justify-content-center align-items-center">
                <div className="card m-4 p-4 w-md-100 w-75">
                    <h3 className="fs-4">Regístrate</h3>
                    <p className="card-subtitle mb-2 text-body-secondary fs-7">
                        Es y seguirá siendo gratuito!
                    </p>
                    <div className="card-body">

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstNameInput" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-100"
                                    id="firstNameInput"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastNameInput" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-100"
                                    id="lastNameInput"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="dateOfBirthInput" className="form-label">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    className="form-control w-100"
                                    id="dateOfBirthInput"
                                    name="dateOfBirth"
                                    value={dateOfBirth}
                                    max={new Date().toISOString().split("T")[0]}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control w-100"
                                    id="emailInput"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                />
                                <div id="emailHelp" className="form-text fs-7">
                                    Nunca compartiremos tu correo electrónico con nadie más.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">
                                    Contraseña
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="passwordInput"
                                        name="password"
                                        value={password}
                                        onChange={onInputChange}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm fw-bold fs-6 d-flex align-items-center no-shadow"
                                        onClick={() => handleTogglePasswordVisibility("password")}
                                    >
                                        {showPassword ? <ion-icon name="eye-off-outline"></ion-icon> : <ion-icon name="eye-outline"></ion-icon>}
                                    </button>
                                </div>
                                <div id="passwordHelp" className="form-text fs-7">
                                    Incluye letras y números, combina mayúsculas y minúsculas,
                                    incluye al menos un caracter especial, tener al menos 8 caracteres
                                    y no debe contener espacios en blanco.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repeatPasswordInput" className="form-label">
                                    Repetir la Contraseña
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="form-control"
                                        id="repeatPasswordInput"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm fw-bold fs-6 d-flex align-items-center no-shadow"
                                        onClick={() => handleTogglePasswordVisibility("confirmPassword")}
                                    >
                                        {showConfirmPassword ? <ion-icon name="eye-off-outline"></ion-icon> : <ion-icon name="eye-outline"></ion-icon>}
                                    </button>
                                </div>
                            </div>
                            <div className="w-100 text-center">
                                <button type="submit" className="btn btn-primary w-md-100 w-50">
                                    Registrarse
                                </button>
                            </div>
                        </form>
                        <div className="card-footer text-body-secondary mt-4 text-center">
                            <p className="fs-7">Ya tienes cuenta? Inicia sesion <NavLink to="/login">aquí.</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};