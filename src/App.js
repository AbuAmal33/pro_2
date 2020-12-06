import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./Action";
import {useEffect} from "react";
import Header from "./Header";



function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

  return (
      <div>
          <Header />
          {loading ? <div>идет загрузка...</div> : ''}
          {todos.map(todo => {
              return (
                  <div className={'todo'}>
                      <div>
                          <input type={'checkbox'}/>
                      </div>
                      <div className={'title'}>
                          {todo.title}
                      </div>
                      <div className={'actions'}>
                          <button>
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
