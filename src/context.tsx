import React, { useContext, useReducer } from "react";
import { ITodo, IAction } from "./interface";

const todos: ITodo[] = [];

const TodosContext = React.createContext({
  todos
});

const DispatchContext = React.createContext((() => 0) as React.Dispatch<
  IAction
>);

export const useDispatch = () => {
  return useContext(DispatchContext);
};

export const useGlobalState = () => {
  return useContext(TodosContext);
};

// export const useGlobalState = <K extends keyof IState>(property: K) => {
//   const state = useContext(TodosContext);
//   return state[property]; // only one depth selector for comparison
// };

export { TodosContext, DispatchContext };
