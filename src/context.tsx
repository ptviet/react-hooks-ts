import React, { useContext, useReducer } from "react";
import { ITodo, IAction, IState } from "./interface";

const todos: ITodo[] = [];
const currentTodo: any = {};

const TodosContext = React.createContext({
  todos,
  currentTodo
});

const DispatchContext = React.createContext((() => 0) as React.Dispatch<
  IAction
>);

export const useDispatch = () => {
  return useContext(DispatchContext);
};

export const useGlobalState = () => {
  return useContext(TodosContext) as IState;
};

// export const useGlobalState = <K extends keyof IState>(property: K) => {
//   const state = useContext(TodosContext);
//   return state[property]; // only one depth selector for comparison
// };

export { TodosContext, DispatchContext };
