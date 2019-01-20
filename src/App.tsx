import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { TodosContext, useGlobalState, DispatchContext } from "./context";
import TodosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { API } from "./config";
import { ITodo } from "./interface";

const useAPI = (endpoint: string) => {
  const [data, setData] = useState([] as ITodo[]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(endpoint);
    if (res.data[0]) {
      setData(res.data[0]);
    }
  };

  return data;
};

const App = () => {
  const initialState = useGlobalState();
  const [state, dispatch] = useReducer(TodosReducer, initialState);
  const payload = useAPI(API);

  useEffect(
    () => {
      dispatch({ type: "GET_TODOS", payload });
    },
    [payload]
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <TodosContext.Provider value={state}>
        <div className="container mx-auto max-w-md text-center font-mono">
          <h1 className="font-bold">Todos</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodosContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
