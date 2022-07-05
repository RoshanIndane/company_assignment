import React, { useEffect, useState } from 'react'
import Product from './Product';
import styled from 'styled-components'
import axios from 'axios'





const Container = styled.div({

    padding: "20px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "space-between"
  
  })
  

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get("https://hypee-1.herokuapp.com/api/products");
    
             console.log(res)
            setProducts(res.data)
          } catch (error) {
    
          }
        }
        getProducts()
      }, []);
    
    

  return (
    <Container>
       
      {products.map((el) => (
        <Product el={el} key={el.id} />
      ))}
    </Container>
  )
}

export default Products
