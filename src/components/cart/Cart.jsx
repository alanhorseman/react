import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValuesUser = {
  name: "",
  email: "",
  phone: "",
};

export const Cart = () => {
  const { products, onRemove } = useContext(CartContext);
  const [user, setUser] = useState(initialValuesUser);

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  const handleShoppingCart = () => {
    const shoppingCart = {
      user,
      products,
      total,
    };

    const db = getFirestore();
    const shoppingCartCollection = collection(db, "shoppingCart");
    addDoc(shoppingCartCollection, shoppingCart).then(({ id }) => {
      if (id) {
        alert("Gracias por su compra, su carrito es el numero: " + id);
        console.log(shoppingCart);
      }
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Carrito</h1>
      <div className="cart">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} width={200} alt={product.name} />
            <h3>Precio: ${product.price}</h3>
            <h3>Cantidad: {product.count}</h3>
            <h3>Subtotal: ${product.price * product.count}</h3>
          </div>
        ))}
      </div>

      <section>
        <div>
          <h3>Total: {total}</h3>
          <button onClick={handleShoppingCart}>Comprar</button>
        </div>
        <form action="">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>Telefono</label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </form>
      </section>
      <button onClick={onRemove}>Vaciar carrito</button>
    </>
  );
};
