import { useState } from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Prod from './components/Prod';

function App() {
  const [show, setShow]=useState(true);

  const [cart, setCart]= useState([])

  const handleClick=(e)=>{
      setCart([...cart, e])
// console.log(cart)
  }

  return (
    <div className="App">
<Navbar setShow={setShow}/>
{
show?<Prod handleClick={handleClick}/>:<Cart cart={cart} />
}

    </div>
  );
}

export default App;
