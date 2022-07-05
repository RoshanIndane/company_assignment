import styled from 'styled-components'
import React from 'react'
import "../App.css"


const Container=styled.div({
    flex:"1",
    margin:'5px',
    minWidth:"280px",
    height:'350px',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'beige',
    position:"relative",
    border:"1px solid black",
    textAlign:"center"
    
})



const Image=styled.img({
    height:'75%',
    zIndex:'2'
})








const Product = ({el}) => {
  return (
    <Container key={el.id}>
        
        <Image src={el.img}/>
        <h4>RS {el.price}</h4>
        <p>{el.title}</p>
    </Container>
  )
}

export default Product