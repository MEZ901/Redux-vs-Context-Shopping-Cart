import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useShoppingCart } from "../context";

const ShoppingCartItem = ({ item }) => {
  const {removeFromCart} = useShoppingCart()
  return (
    <Card sx={{ display: "flex", m: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt="image"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "100%", pr: 1 }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.price}$ x {item.quantity}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: "100%" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ShoppingCartItem;