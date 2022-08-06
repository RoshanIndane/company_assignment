import React, { useState } from 'react'

const Cart = ({cart}) => {
  console.log(cart)
  //const {title, author, price, img}=cart;

  //  const [rev, setRev]=useState([cart])

  const handlechange=(id)=>{
   {cart.filter((e)=>{
      return e.id!==id
    })}
    // setRev(remove)
  }

   

  return (
    <>
      {
        cart.map((e)=>(<div>
<h1>{e.title}</h1>
<button onClick={()=>handlechange(e.id)}>Remove</button>
</div>))
      }
    </>
  )
}

export default Cart