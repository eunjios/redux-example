import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: 'ADD', value: 10 });
  };

  const subHandler = () => {
    dispatch({ type: 'SUB', value: 10 });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{counter}</h2>
      <div>
        <button onClick={addHandler}>더하기</button>
        <button onClick={subHandler}>빼기</button>
      </div>
    </div>
  );
};

export default Counter;
