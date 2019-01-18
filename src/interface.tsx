export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

export interface IState {
  todos: ITodo[];
  currentTodo: ITodo;
}

export interface IAction {
  type: string;
  payload: any;
}
