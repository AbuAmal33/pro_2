import React from 'react';
import ReactLoading from "react-loading";
import {checkTodo, removeTodo} from "../redux/Action";
import {useDispatch} from "react-redux";

function Todo(props) {
    const dispatch = useDispatch();

    const user = props.users.find(u => {
        if(u.id === props.todo.userId) {
            return true;
        }
        return false;
    })

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

    return (
        <div className={'todo'}>
            <div>
                {props.todo.checking ? (
                    <ReactLoading
                        type={'spin'}
                        color={'#0033ff'}
                        width={16}
                        height={16}
                    />
                ) : (
                    <input
                        type={'checkbox'}
                        checked={props.todo.completed}
                        onChange={() => handleCheck(props.todo.id, props.todo.completed)}
                    />
                )}
            </div>
            <div className={'title'}>
                {props.todo.title} ({user.email})
            </div>
            <div className={'actions'}>
                <button
                    onClick={() => handleDelete(props.todo.id)}
                    disabled={props.todo.deleting}
                >
                    delete
                </button>
            </div>
        </div>
    );
}

export default Todo;