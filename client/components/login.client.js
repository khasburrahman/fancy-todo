const component_login = () => `    
    <form class="form-signin">
        <h2 class="h2 mb-3 font-weight-normal">"Fancy" todo</h2>
        <h5 class="h5 mb-3 font-weight-normal">Please sign in</h5>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button onclick="event_login()" class="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
        <button onclick="event_register()" class="btn btn-sm btn-primary btn-block btn-primary2" type="submit">Register</button>
        <br>
        <h5 class="h5 mb-3 font-weight-normal">Or sign in with github</h5>
        <button onclick="event_loginGithub()" class="btn btn-sm btn-primary btn-block btn-primary2" type="submit">Sign in with github</button>
        <p class="mt-5 mb-3 text-muted">&copy; hemhem 2020</p>
    </form>
`

function event_login() {
    event.preventDefault()
    let email = $("#inputEmail").val()
    let password = $("#inputPassword").val()
    if (email == '' || password == ''){
        toast_error('username / email can\'t be empty')
        return
    }

    action_login(email, password)
        .then(res => res.json())
        .then(res => {
            debugger
            let { access_token } = res.body.json()
            window.localStorage.setItem(USER_EMAIL_LOCAL_STORAGE, email)
            window.localStorage.setItem(USER_TOKEN_LOCAL_STORAGE, access_token)

        })
        .catch(err => {
            debugger
            let msg = err.response && err.response.data || 'unknown error: '+ err.message
            toast_error(msg);
        })
}

function event_register() {
    event.preventDefault()
    
}

function event_register() {
    event.preventDefault()

}