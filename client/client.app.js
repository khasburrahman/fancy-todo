const USER_LOCAL_STORAGE = '89h32inde&^#$I@GUBDEJFIW'
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
    let user = window.localStorage.getItem(USER_LOCAL_STORAGE) || null
    if (user) {

    } else {
        let components = [component_loading()]
        render(components)
    }
    console.log("ready!");
})