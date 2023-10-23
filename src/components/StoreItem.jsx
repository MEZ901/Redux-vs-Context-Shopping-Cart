import { Button, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const StoreItem = ({ element }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseCartQuantity = (id) => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseCartQuantity = (id) => {
    setQuantity((prev) => prev - 1);
  };

  const removeFromCart = (id) => {
    setQuantity(0);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={element.images[0]}
        alt="image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          {element.price}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="w-full flex justify-center">
          {quantity === 0 ? (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => increaseCartQuantity(element.id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div className="w-full flex items-center flex-col">
              <div className="flex items-center justify-center gap-3">
                <IconButton onClick={() => increaseCartQuantity(element.id)}>
                  <AddIcon />
                </IconButton>
                <Typography>{quantity} in cart</Typography>
                <IconButton onClick={() => decreaseCartQuantity(element.id)}>
                  <RemoveIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                color="warning"
                sx={{ width: "100%" }}
                onClick={() => removeFromCart(element.id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default StoreItem;
