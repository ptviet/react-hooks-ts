import React from "react";
import Axios from "axios";
import { useDispatch, useGlobalState } from "../context";
import { ITodo } from "../interface";
import { API } from "../config";

const TodoList = () => {
  const { todos } = useGlobalState();
  const dispatch = useDispatch();

  const onDelete = async (todo: ITodo) => {
    await Axios.delete(`${API}/${todo.id}`);
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  const onToggle = async (todo: ITodo) => {
    const res = await Axios.patch(`${API}/${todo.id}`, {
      complete: !todo.complete
    });
    if (res.data) {
      dispatch({ type: "TOGGLE_TODO", payload: res.data });
    }
  };

  return (
    <>
      <ul className="list-reset text-grey-darkest p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            onDoubleClick={() => onToggle(todo)}
            className="flex items-center bg-teal-light border-black border-dashed border-2 my-2 py-4"
          >
            <span
              className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                "line-through text-white"}`}
            >
              {todo.text}
            </span>
            <button
              className="mr-2"
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TODO", payload: todo })
              }
            >
              ✏️
            </button>
            <button className="mr-1" onClick={() => onDelete(todo)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
