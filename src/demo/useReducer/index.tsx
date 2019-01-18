import React, {
  // useContext,
  useReducer
} from "react";
// import { UserContext } from "./index";

interface IState {
  count: number;
}
interface IAction {
  type: string;
}

const initialState: IState = {
  count: 0
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return {
        ...initialState
      };
    default:
      return initialState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const value = useContext(UserContext);
  return (
    <div>
      {/* <p>{value}</p> */}
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
};

export default UseReducer;
