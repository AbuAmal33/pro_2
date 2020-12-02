import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./Action";
import {useEffect} from "react";



function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

  return (
      <div>
          Список дел:
          {loading ? <div>идет загрузка...</div> : ''}
          {todos.map(todo => {
              return (
                  <div>
                      {todo.title}
                  </div>
              )
          })}
      </div>
  );
}

export default App;
