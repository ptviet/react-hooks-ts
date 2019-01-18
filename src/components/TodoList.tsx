import React, { useContext } from "react";
import { TodosContext, DispatchContext } from "../context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="font-bold">Todos</h1>
      <ul className="list-reset text-grey-darkest p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            onDoubleClick={() =>
              dispatch({ type: "TOGGLE_TODO", payload: todo })
            }
            className="flex items-center bg-teal-light border-black border-dashed border-2 my-2 py-4"
          >
            <span
              className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                "line-through text-white"}`}
            >
              {todo.text}
            </span>
            <button className="mr-2">✏️</button>
            <button className="mr-1">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
