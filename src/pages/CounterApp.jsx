import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDec, counterInc } from "../store/action";

const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>CounterApp : {count}</h1>
      <button onClick={() => dispatch(counterInc())}>+</button>
      <button onClick={() => dispatch(counterDec())}>-</button>
    </div>
  );
};

export default CounterApp;
