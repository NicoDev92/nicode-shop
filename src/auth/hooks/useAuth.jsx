import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../services/authService";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = (userLogin) => {
        const isLogin = onLogin(userLogin);
        if (isLogin) {
            const user = { username: 'Alejandro' };
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
        } else {
            Swal.fire({
                icon: "error",
                title: "Error de validación:",
                text: "Usuario o contraseña incorrectos!",
            });
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        })
        sessionStorage.removeItem('login');
        navigate("/")
    }


    return {
        login,
        initialLoginForm,
        dispatch,
        handlerLogin,
        handlerLogout
    }
}