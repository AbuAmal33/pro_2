import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import './style.css'

const initialState = {
    todos: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                loading: true
            };
        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case 'delete':
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    if (todo.id === action.payload) {
                        return false;
                    }
                    return true;
                })
            }
        case 'start_delete':
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
        case 'check':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div className={'fon'}>
            <App />
        </div>
    </Provider>,

  document.getElementById('root')
);
