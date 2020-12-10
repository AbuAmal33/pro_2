import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadTodos, loadUsers } from "../redux/Action";
import Todo from "./Todo";

function Todos(props) {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const users = useSelector((state) => state.users);
    const usersLoading = useSelector((state) => state.userLoading)

    const waiting = loading || usersLoading;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTodos());
        dispatch(loadUsers())
    }, [])

    return (
        waiting ? <div>идет загрузка...</div> : (
        todos.map(todo => {
        return (<Todo key={todo.id} users={users} todo={todo}/>);
        })
        )
    )
}

export default Todos;