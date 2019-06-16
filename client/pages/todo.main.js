const page_todoMain = (todos,) => `
    <h3 class="h3 mt-5 mb-3 font-weight-normal">Welcome ${window.localStorage.getItem(USER_EMAIL_LOCAL_STORAGE)}</h3>
    
    <div class="text-left pl-5">
        <button onClick="event_create()" class="btn btn-lg btn-primary">Create New Todo</button>
    </div>
    <h5 class="h5 mb-3 font-weight-normal">Your Todo list: </h5>

    <div class="row">
        <div class="col-sm-2 p-3"></div>
        <div class="col-sm-8 p-3"></div>
        ${window.todoAppState.todos.map(todo => component_todo(todo)).join('')}
    </div>
    
`

function event_create() {
    render('create')
}