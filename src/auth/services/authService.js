

export const onLogin = (userLogin) => {
    const isValidUser = (userLogin.username === 'usuario' && userLogin.password === '1234');
    return isValidUser;
}