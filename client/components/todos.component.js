const component_todo = (todo, i) => `
        <div class="col-sm-2 p-3">
            <h5>${todo.name}</h5>
            <p>Due Date: <b>${formatDate(todo.dueDate)}</b></p>
            ${(todo.status) ? `<img src="assets/svg/check.svg" height="25px" alt="icon name">` : ``}
        </div>
        <div class="col-sm-8 p-3">
            ${todo.htmlData}
        </div>
        <div class="col-sm-2 p-3 text-right">
            <button onclick="event_update(${i})" class="btn btn-sm btn-primary btn-block">Edit</button>
            <button onclick="event_delete(${i})" class="btn btn-sm btn-danger btn-block">Delete</button>
            <button onclick="event_markAsDone(${i})" class="btn btn-sm ${(todo.status) ? "btn-danger" : "btn-success"} btn-block">${(todo.status) ? 'Mark as Incomplete' : 'Mark As Complete'}</button>
        </div>
        <hr/>
`

function event_update(i) {

}

function event_delete(i) {
    
}

function event_markAsDone(i) {
    let todo = window.todoAppState.todos[i]  || {}
    let {status = null} = todo 
    if (status === null) return
    status = !status
    action_update({status}, todo._id)
        .then(() => action_listTodo())
        .then(res => {
            window.todoAppState.todos = res.data
            render('main')
            toast_success('Berhasil update!', `Todo ${todo.name} ${(status)? "selesai" : "batal selesai"}`)
        })
        .catch(toast_error)
}