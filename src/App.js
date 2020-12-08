import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removeTodo, checkTodo} from "./Action";
import {useEffect} from "react";
import Header from "./Header";



function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

  return (
      <div>
          <Header />
          {loading ? <div>идет загрузка...</div> : ''}
          {todos.map(todo => {
              return (
                  <div className={'todo'}>
                      <div>
                          <input type={'checkbox'}
                                 checked={todo.completed}
                                 onChange={() => handleCheck(todo.id, todo.completed)}/>
                      </div>
                      <div className={'title'}>
                          {todo.title}
                      </div>
                      <div className={'actions'}>
                          <button
                              onClick={() => handleDelete(todo.id)}
                              disabled={todo.deleting}
                              >
                              delete
                          </button>
                      </div>
                  </div>

              )
          })}
      </div>
  );
}

export default App;
