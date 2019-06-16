const BASE_URL = `http://localhost:3000`

function getToken() {
    let user = window.localStorage.getItem(USER_LOCAL_STORAGE)
    return user.token
}

/**
 * return a promise, {user, email}
 * @param {string} email 
 * @param {sting} password 
 */
function action_login(email, password) {
    return fetch(`${BASE_URL}/user/login`, {
       method: "POST",
       headers: {
           'Content-Type': 'application/json'
       },
       body: {email, password}
    })
}

function register(email, password) {
    return fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: { email, password }
    }) 
}

function listTodo() {
    return fetch(`${BASE_URL}/todo`, {
        headers: {
            token: 
        }
    })
}