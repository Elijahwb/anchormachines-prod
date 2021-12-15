export function setUser(user) {
    sessionStorage.setItem('amUser', JSON.stringify(user));
}

export function setAuth(value) {
    sessionStorage.setItem("amAuthenticated", value);
}

export function setToken(token){
    sessionStorage.setItem("amAccessToken", token);
}

export function setRefreshToken(token) {
    sessionStorage.setItem("amRefreshToken", token);
}

export function user() {
    return JSON.parse(sessionStorage.getItem('amUser'));
}

export function token(){
    return sessionStorage.getItem('amAccessToken');
}

export function isAuth(){
    return sessionStorage.getItem('amAuthenticated');
}

export function refreshToken() {
    return sessionStorage.getItem('amRefreshToken');
}

export function logout(toLogin) {
    sessionStorage.removeItem("amAuthenticated");
    sessionStorage.removeItem("amAccessToken");
    sessionStorage.removeItem("amRefreshToken");
    toLogin();
}