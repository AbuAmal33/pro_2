export const loadTodos = () => {
    return function (dispatch) {
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