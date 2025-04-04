import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { products, onRemove } = useContext(CartContext);

  return (
    <>
      <h1>Carrito</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} width={200} alt={product.name} />
          <h3>Precio: ${product.price}</h3>
          <h3>Cantidad: {product.count}</h3>
          <h3>Subtotal: ${product.price * product.count}</h3>
        </div>
      ))}
      <button onClick={onRemove}>Vaciar carrito</button>
    </>
  );
};
