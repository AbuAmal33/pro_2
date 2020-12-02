import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./Action";
import {useEffect} from "react";



function App() {
    const todos = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

  return (
      <div>
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
