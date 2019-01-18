import { IState, IAction } from "./interface";

const TodosReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      const toggled = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : todo
      );
      return {
        ...state,
        todos: toggled
      };
    default:
      return state;
  }
};

export default TodosReducer;
