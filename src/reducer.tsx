import { IState, IAction } from "./interface";

const TodosReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };
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
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      };
    case "ADD_TODO":
      const added = [action.payload, ...state.todos];
      return {
        ...state,
        todos: added
      };
    case "EDIT_TODO":
      const editedTodo = { ...state.currentTodo, text: action.payload };
      const editedTodoIndex = state.todos.findIndex(
        todo => todo.id === editedTodo.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, editedTodoIndex),
        editedTodo,
        ...state.todos.slice(editedTodoIndex + 1)
      ];
      return {
        ...state,
        todos: updatedTodos,
        currentTodo: {} as any
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
