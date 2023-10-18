import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const counter = useSelector(
    (state) => state.counter.counter
  );
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(counterActions.add(10));
  };

  const subHandler = () => {
    dispatch(counterActions.sub(10));
  };

  return (
    <div>
      <h2>{counter}</h2>
      <div>
        <button onClick={addHandler}>더하기</button>
        <button onClick={subHandler}>빼기</button>
      </div>
    </div>
  );
};

export default Counter;
