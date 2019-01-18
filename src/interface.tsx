export interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

export interface IState {
  todos: ITodo[];
}

export interface IAction {
  type: string;
  payload: any;
}
