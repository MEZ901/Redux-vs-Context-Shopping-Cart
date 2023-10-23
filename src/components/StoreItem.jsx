import { Button, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StoreItem = ({ element }) => {
  const quantity = 5;
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
            <Button variant="contained" sx={{ width: "100%" }}>
              + Add To Cart
            </Button>
          ) : (
            <div className="w-full flex items-center flex-col">
              <div className="flex items-center justify-center gap-3">
                <IconButton>
                  <AddIcon />
                </IconButton>
                <Typography>{quantity} in cart</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                color="warning"
                sx={{ width: "100%" }}
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
