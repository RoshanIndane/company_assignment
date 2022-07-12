import React from 'react'
import list from "../data"
import Card from './card'
import "../styles/prod.css"
import { useState } from 'react'

const Prod = ({handleClick}) => {

    

  return (
    <div className='main'>
        {
          list.map((e)=>(
            <Card key={e.id} e={e} handleClick={handleClick}/>
          ))  
        }
    </div>
  )
}

export default Prod