import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
import ShoppingCart from "../components/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";

const Store = () => {
  const [elements, setElements] = useState([]);

  const open = useSelector((state) => state.drawer.open);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=10&limit=10")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      <ShoppingCart open={open} />
      {elements.map((element, index) => (
        <StoreItem key={index} element={element} />
      ))}
    </div>
  );
};

export default Store;
