import React, { useState } from "react";
import uuidv4 from "uuid";
import { useDispatch, useGlobalState } from "../context";
import { ITodo } from "../interface";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    const newTodo: ITodo = { id: uuidv4(), text: todo, complete: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodo("");
  };

  return (
    <form className="flex justify-center p-5" onSubmit={onSubmit}>
      <input
        type="text"
        className="border-black border-solid border-2"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default TodoForm;
