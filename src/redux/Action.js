import {
    TODOS_CHECK_START,
    TODOS_CHECK_SUCCESS,
    TODOS_LOAD_START,
    TODOS_LOAD_SUCCESS,
    TODOS_REMOVE_START,
    TODOS_REMOVE_SUCCESS, USERS_LOAD_START, USERS_LOAD_SUCCESS
} from "./type";

export const loadTodos = () => {
    return function (dispatch) {
        dispatch({ type: TODOS_LOAD_START});
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: TODOS_LOAD_SUCCESS,
                    payload: json
                })
        })
    }
}

export const removeTodo = (id) => {
    return function (dispatch) {
        dispatch({type: TODOS_REMOVE_START, payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'delete'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: TODOS_REMOVE_SUCCESS,
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return function (dispatch) {
        dispatch({type:TODOS_CHECK_START, payload: id})
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
                    type: TODOS_CHECK_SUCCESS,
                    payload: id
                })
            })
    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: USERS_LOAD_START})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: USERS_LOAD_SUCCESS,
                    payload: json
                })
            })
    }
}