import React, { useState, useEffect } from "react";
import uuidv4 from "uuid";
import { useDispatch, useGlobalState } from "../context";
import { ITodo } from "../interface";
import Axios from "axios";
import { API } from "../config";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { currentTodo } = useGlobalState();

  const [todo, setTodo] = useState("");

  useEffect(
    () => {
      if (currentTodo.text) {
        setTodo(currentTodo.text);
      }
    },
    [currentTodo.id]
  );

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (currentTodo.text) {
      const res = await Axios.patch(`${API}/${currentTodo.id}`, {
        text: todo
      });
      if (res.data) {
        dispatch({ type: "EDIT_TODO", payload: res.data });
      }
    } else {
      const newTodo: ITodo = { id: uuidv4(), text: todo, complete: false };
      const res = await Axios.post(API, newTodo);
      if (res.data) {
        dispatch({ type: "ADD_TODO", payload: res.data });
      }
    }

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
      <button type="submit" className="ml-1">
        ✅
      </button>
    </form>
  );
};

export default TodoForm;
