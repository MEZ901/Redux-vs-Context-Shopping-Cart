import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {  Typography } from "@mui/material";
import { useEffect } from "react";
import { useShoppingCart } from "../context";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({ isOpen }) => {
  const items = useShoppingCart().cartItems;
  const {closeCart} = useShoppingCart()
  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      <Box
        sx={{ width: 450 }}
        role="presentation"
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
          items.map((item, index) => <ShoppingCartItem key={index} item={item} />)
        )}
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;