
import { increment } from './app/reducers/counterslice';
import { useSelector, useDispatch } from 'react-redux'

const Home= () =>{
    return(
        <>
            <button onClick={() => dispatch(increment())}>increment</button>
        </>
    )
}