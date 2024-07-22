
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Count';
import { decrement, increment, incrementByAmount } from './redux/slices/counter';
import { useState } from 'react';

function App() {
 
  const dispatch = useDispatch()
  const [amount , setAmount] = useState(0)
  return (
    <div className="App">
         <button onClick={()=> dispatch(increment())}>Increment</button>
         <Counter />
         <button onClick={()=> dispatch(decrement())}>Decrement</button>
         <input onChange={(e)=> setAmount(e.target.value)} />
         <button onClick={()=> dispatch(incrementByAmount({amount}))}>Increment By Amount</button>
         
    </div>
  );
}

export default App;
