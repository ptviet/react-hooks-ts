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
    case "ADD_TODO":
      const added = [action.payload, ...state.todos];
      return {
        ...state,
        todos: added
      };
    case "EDIT_TODO":
      const edited = state.todos.map(todo =>
        todo.id === action.payload.id ? (todo = action.payload) : todo
      );
      return {
        ...state,
        todos: edited
      };
    case "DELETE_TODO":
      const filtered = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filtered
      };
    default:
      return state;
  }
};

export default TodosReducer;
