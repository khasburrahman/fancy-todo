const BASE_URL = `http://localhost:3000`

function _axiosGetConfig() {
    let token = window.localStorage.getItem(USER_TOKEN_LOCAL_STORAGE) 
    return {
        headers: {
            'Content-Type': 'application/json',
            'token': token
        }
    }
}

/**
 * return a promise, {user, email}
 * @param {string} email 
 * @param {sting} password 
 */
function action_login(email, password) {
    let payload = {email, password}
    return axios.post(`${BASE_URL}/user/login`, payload, _axiosGetConfig())
}

function action_register(email, password) {
    let payload = {email, password}
    return axios.post(`${BASE_URL}/user/register`, payload, _axiosGetConfig()) 
}

function action_loginWithGithub(code) {
    let payload = {code}
    return fetch(`${BASE_URL}/user/loginGithub`, payload, _axiosGetConfig()) 
}

function action_listTodo() {
    return axios.get(`${BASE_URL}/todo`, _axiosGetConfig())
}