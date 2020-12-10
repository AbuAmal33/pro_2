import {
    TODOS_CHECK_START, TODOS_CHECK_SUCCESS,
    TODOS_LOAD_START,
    TODOS_LOAD_SUCCESS,
    TODOS_REMOVE_START,
    TODOS_REMOVE_SUCCESS, USERS_LOAD_START, USERS_LOAD_SUCCESS
} from "./type";

const initialState = {
    todos: [],
    loading: false,
    users: [],
    userLoading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_LOAD_START:
            return {
                ...state,
                loading: true
            };
        case TODOS_LOAD_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case TODOS_REMOVE_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    if (todo.id === action.payload) {
                        return false;
                    }
                    return true;
                })
            }
        case TODOS_REMOVE_START:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }
                    return todo;
                })
            }
        case TODOS_CHECK_START:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo;
                })
            }
        case TODOS_CHECK_SUCCESS:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo;
                })
            }
        case USERS_LOAD_START:
            return {
                ...state,
                userLoading: true
            }
        case USERS_LOAD_SUCCESS:
            return {
                ...state,
                userLoading: false,
                users: action.payload
            }
        default:
            return state;
    }
}

export default reducer;