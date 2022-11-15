import React, {useReducer} from "react";

type stateProps = {
  count: number;
};
type actionProps = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

function reducer(state: stateProps, action: actionProps) {
  switch (action.type) {
    case "increment":
      return {count: state.count + action.payload};
    case "decrement":
      return {count: state.count - action.payload};
    default:
      return state;
  }
}
const Count1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: "increment", payload: 10})}>
        Increment 10
      </button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>
        Decrement 10
      </button>
    </div>
  );
};

export default Count1;
