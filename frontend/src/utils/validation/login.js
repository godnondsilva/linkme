export const validateLogin = (email, password) => {
    if (email.length !== 0 && password.length !== 0) {
        return true;
    }
    return false;
}