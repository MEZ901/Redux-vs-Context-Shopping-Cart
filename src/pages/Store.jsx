import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
import ShoppingCart from "../components/ShoppingCart";

const Store = () => {
  const [elements, setElements] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      <ShoppingCart open={open} toggleDrawer={toggleDrawer} />
      {elements.map((element, index) => (
        <StoreItem key={index} element={element} />
      ))}
    </div>
  );
};

export default Store;
