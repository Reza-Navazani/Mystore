import { useEffect, useState } from "react"
import Catalog from "./features/catalog/Catalog";
import { Container } from "@mui/material";
import { Product } from "./product";

function App() {

  const[products, setProducts]= useState<Product[]>([]); 

  useEffect(()=>{
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data=> setProducts(data))
  }, [])

  const addProduct =()=>{
    setProducts(prevstate=>[...prevstate, 
      {
      id: prevstate.length + 1,
      name: 'product' + (prevstate.length + 1),
      description: 'test',
      price: (prevstate.length * 100) + 100,
      pictureUrl: 'heeps://picsum.photo/200',
      type: 'test',
      brand: 'test',
      quantityInStock: 100  
    }])
  }
  return (
    <Container>
    <h1 style={{fontSize: '1.2rem'}}>Restore</h1>
     <Catalog products={products} addProduct={addProduct}></Catalog>
    </Container>
  )
}

export default App
