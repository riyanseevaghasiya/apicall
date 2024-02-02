
import { increment,decrement,demo } from './app/reducers/counterslice';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    <div className='app'>
        <h1>COUNT:{count}</h1>
    </div>


    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <button onClick={() => dispatch(demo())}>add 5</button>
    </>
  );
}

export default App;
