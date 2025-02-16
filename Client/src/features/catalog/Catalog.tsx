import { Button } from "@mui/material";
import { Product } from "../../product"

type Props = {
    products: Product[];
    addProduct: ()=> void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <div>
     <ul>
        {products.map(item=>(
          <li key={item.id}> {item.name} - {item.price} </li>
        ))}
      </ul>    
      <Button onClick={addProduct} variant='contained'> Add Product</Button>
    </div>
  )
}
