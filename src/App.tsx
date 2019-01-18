import React, { useContext, useReducer } from "react";
import { TodosContext, useGlobalState, DispatchContext } from "./context";
import TodosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const initialState = useGlobalState();
  const [state, dispatch] = useReducer(TodosReducer, initialState);

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
