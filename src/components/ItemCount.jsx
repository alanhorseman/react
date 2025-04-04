import { useState } from "react";

export const ItemCount = ({ stock, add }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleCart = () => {
    setCount(1);
    add(count);
  }

  return (
    <section>
      <button onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCart}>Agregar al carrito</button>
    </section>
  );
};
