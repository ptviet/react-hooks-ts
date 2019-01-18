import React from "react";
import { useDispatch, useGlobalState } from "../context";

const TodoList = () => {
  const { todos } = useGlobalState();
  const dispatch = useDispatch();

  return (
    <>
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
            <button
              className="mr-1"
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
