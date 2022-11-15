import React, {useReducer} from "react";

type stateProps = {
  count: number;
};

type UpdateProps = {
  type: "increment" | "decrement";
  payload: number;
};

type resetProps = {
  type: "reset";
};

type actionPorps = UpdateProps | resetProps;

const initialState = {
  count: 0,
};

function reducer(state: stateProps, action: actionPorps) {
  switch (action.type) {
    case "increment":
      return {count: state.count + action.payload};
    case "decrement":
      return {count: state.count - action.payload};
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: "increment", payload: 10})}>
        Incerment 10
      </button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
};

export default Count;
