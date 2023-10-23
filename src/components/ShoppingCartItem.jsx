import { Button, Typography } from "@mui/material";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="w-full flex items-center m-2">
      <img
        src={item.images[0]}
        alt="image"
        width="25%"
        className="rounded-sm"
      />
      <div className="w-full flex flex-col items-center">
        <Typography variant="h6" sx={{ ml: 2 }}>
          {item.title}
        </Typography>

        <Typography variant="h6" sx={{ ml: 2 }}>
          {item.price}$
        </Typography>

        <Button variant="contained" color="warning" className="w-[75%]">
          remove
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
