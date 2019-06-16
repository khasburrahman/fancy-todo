const USER_TOKEN_LOCAL_STORAGE = '89h32inde&^#$I@GUBDEJFIW'
const USER_EMAIL_LOCAL_STORAGE = 'HB#*&@T$E#UDBBF&*GYDKSB('
window.todoAppState = {
    todos: [],
}

/**
 * string komponen yang akan di render
 * @param {Array} components 
 */
function render(components) {
    $('#main').html(components.join(''))
}

$(document).ready(function () {
    let email = window.localStorage.getItem(USER_EMAIL_LOCAL_STORAGE) || null
    let token = window.localStorage.getItem(USER_TOKEN_LOCAL_STORAGE) || null
    render([component_loading()])
    if (getQueryParam('code')) {
        /** login degan github */
    } else if (email && token) {
        
    } else {
        let components = [component_login()]
        render(components)
    }
    console.log("ready!");
})