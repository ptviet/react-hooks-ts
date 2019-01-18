import React from "react";
import { ITodo, IAction } from "./interface";

const todos: ITodo[] = [
  {
    id: 1,
    text: "Eat breakfast",
    complete: false
  },
  {
    id: 2,
    text: "Do laundry",
    complete: false
  },
  {
    id: 3,
    text: "Finish project",
    complete: true
  }
];

const TodosContext = React.createContext({
  todos
});

const DispatchContext = React.createContext((() => 0) as React.Dispatch<
  IAction
>);

export { TodosContext, DispatchContext };
