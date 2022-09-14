export const validateRegister = (username, email, password) => {
    if (username.length !== 0 && email.length !== 0 && password.length !== 0) {
        return true;
    }
    return false;
}