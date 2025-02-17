import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../product";

type Props = {
    product: Product;
 
}

export default function ProductCard({product}:Props) {
  return (
    <Card 
      elevation={3}
      sx={{
        width:200,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardMedia
        sx={{height:240, backgroundSize: 'cover'}}
        image= {product.pictureUrl}
        title= {product.name}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{color:'secondary.main'}}
        >
          ${(product.price / 100).toFixed()}
        </Typography>
      </CardContent>
      <CardActions
          sx={{justifyContent: 'spce-between'}}
        >
          <Button>Add to card</Button>
          <Button>View</Button>
      </CardActions>
    </Card>
  )
}
