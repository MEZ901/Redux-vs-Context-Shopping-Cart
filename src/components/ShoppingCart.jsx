import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../features/drawer/drawerSlice";

const ShoppingCart = ({ open }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => dispatch(closeDrawer())}
      >
        <Box
          sx={{ width: 450 }}
          role="presentation"
          onKeyDown={() => dispatch(closeDrawer())}
        >
          <Typography variant="h5" sx={{ mt: 2, ml: 2, mb: 3 }}>
            Shopping Cart
          </Typography>

          {products.length === 0 ? (
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ mt: 2, ml: 2 }}
            >
              No items in cart
            </Typography>
          ) : (
            products.map((item) => (
              <ShoppingCartItem key={item.id} item={item} />
            ))
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;
