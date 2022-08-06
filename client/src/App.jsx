import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { addNum, subNum } from './redux/action';

function App() {

  const mystate=useSelector((state)=>state.changeNum)
  
  const dispatch=useDispatch()


  return (
    <div className="App">
    <h2>Counter</h2>
    <h1>{mystate}</h1>
    <div className='button'>
      <button onClick={()=>dispatch(addNum(10))}>Add</button>
      <button onClick={()=>dispatch(subNum(5))}>Sub</button>
    </div>
    </div>
  );
}

export default App;
