import React, { useContext, useReducer } from "react";
import { TodosContext, DispatchContext } from "./context";
import TodosReducer from "./reducer";
// import { IState } from "./interface";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <TodosContext.Provider value={state}>
        <TodoList />
      </TodosContext.Provider>
    </DispatchContext.Provider>
  );
};

// export const useDispatch = () => {
//   return useContext(DispatchContext);
// };

// export const useGlobalState = <K extends keyof IState>(property: K) => {
//   const state = useContext(TodosContext);
//   return state[property]; // only one depth selector for comparison
// };

export default App;
