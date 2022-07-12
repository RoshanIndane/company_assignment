import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import "../styles/movies.css"

const Movies = () => {

  const [movies, setMovies]=useState([])

  const getData=()=>{
    axios.get("http://localhost:7001/movie").then((res)=>{
      // console.log(res.data)
      setMovies(res.data)
    })
  }


useEffect(()=>{
  getData()
},[])

  return (
    <div className='main'>
      {
        movies.map((e)=>(
          <Card key={e.id} e={e}/>
        ))
      }
    </div>
  )
}

export default Movies