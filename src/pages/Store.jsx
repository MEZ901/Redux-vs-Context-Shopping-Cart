import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "../context";

const Store = () => {
  const [elements, setElements] = useState([]);
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useShoppingCart();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setElements(data));
      console.log('this is a render ')
  }, []);


  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      <ShoppingCart />
      {elements.map((element, index) => (
        <StoreItem
          key={index}
          element={element}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          quantityInCart={getItemQuantity(element.id)}
        />
      ))}
    </div>
  );
};

export default Store;



