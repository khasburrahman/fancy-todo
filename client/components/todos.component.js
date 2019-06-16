const component_todo = (todo, i) => `
        <div class="col-sm-2 p-3">
            <h5>${todo.name}</h5>
            <p>Due Date: <b>${formatDate(todo.dueDate)}</b></p>
        </div>
        <div class="col-sm-8 p-3">
            ${todo.htmlData}
        </div>
        <div class="col-sm-2 p-3 text-right">
            <button class="btn btn-md btn-primary">Edit</button>
            <button class="btn btn-md btn-danger">Delete</button>
        </div>
        <hr/>
`