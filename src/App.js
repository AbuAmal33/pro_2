import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removeTodo, checkTodo} from "./Action";
import {useEffect} from "react";
import Header from "./Header";
import ReactLoading from 'react-loading'



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
                          {todo.checking ? (
                              <ReactLoading
                                  type={'spin'}
                                  color={'#0033ff'}
                                  width={16}
                                  height={16}
                              />
                              ) : (
                              <input
                                  type={'checkbox'}
                                  checked={todo.completed}
                                  onChange={() => handleCheck(todo.id, todo.completed)}
                              />
                          )}
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
