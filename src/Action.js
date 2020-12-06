export const loadTodos = () => {
    return function (dispatch) {
        dispatch({ type: 'start'});
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                })
        })
    }
}

export const removeTodo = (id) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'delete'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'patch',
            body: JSON.stringify({completed: !completed}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: 'check',
                    payload: id
                })
            })
    }
}