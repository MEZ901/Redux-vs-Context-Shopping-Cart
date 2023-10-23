import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      {elements.map((element, index) => (
        <StoreItem key={index} element={element} />
      ))}
    </div>
  );
};

export default Store;
