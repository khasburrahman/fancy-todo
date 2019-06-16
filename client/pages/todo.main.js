const page_todoMain = () => {
    let todos = window.todoAppState.todos 
    return `
        <div class="p-4">
            <div class="text-left pl-5">
                <button onClick="event_create()" class="btn btn-md btn-primary">New Todo</button>
            </div>
            <h5 class="h5 mb-3 font-weight-normal">${(todos.length > 0) ? "Your Todo list: " : 'Your Todo is currently empty'}</h5>

            <div class="row">
                <div class="col-sm-2 p-3"></div>
                <div class="col-sm-8 p-3"></div>
                ${window.todoAppState.todos.map(todo => component_todo(todo)).join('')}
            </div> 
        </div>
    `
}

function event_create() {
    render('create', () => {
        window.todoAppState.quill = new Quill('#quill-editor', {
            theme: 'snow'
        })
    })
}