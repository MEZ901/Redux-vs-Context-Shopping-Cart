import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({ open, toggleDrawer }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 36,
        title: "Recycled Metal Pizza",
        price: 559,
        description:
          "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        images: [
          "https://i.imgur.com/M3QKiC5.jpeg",
          "https://i.imgur.com/lVH533g.jpeg",
          "https://i.imgur.com/fpT4052.jpeg",
        ],
        creationAt: "2023-10-23T05:28:59.000Z",
        updatedAt: "2023-10-23T05:28:59.000Z",
        category: {
          id: 5,
          name: "Others",
          image: "https://i.imgur.com/Dm2pPfd.jpeg",
          creationAt: "2023-10-23T05:28:59.000Z",
          updatedAt: "2023-10-23T05:28:59.000Z",
        },
      },
    ]);
  }, []);
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 450 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h5" sx={{ mt: 2, ml: 2, mb: 3 }}>
            Shopping Cart
          </Typography>

          {items.length === 0 ? (
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ mt: 2, ml: 2 }}
            >
              No items in cart
            </Typography>
          ) : (
            items.map((item) => <ShoppingCartItem key={item.id} item={item} />)
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;
