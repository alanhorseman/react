import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }

  const onRemove = () => {
    setProducts([]);
  }
  return (
    <CartContext.Provider value={{products, addProduct, onRemove}}>
      {children}
    </CartContext.Provider>
  )
}