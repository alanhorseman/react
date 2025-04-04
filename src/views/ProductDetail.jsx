import { useState, useEffect, useContext, use } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {ItemCount} from "../components/ItemCount";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";


export const ProductDetail = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  const {addProduct} = useContext(CartContext);


  useEffect(() =>{
    const db = getFirestore();
    const docRef = doc(db, "products", id);

    getDoc(docRef)
    .then((snapshot) => {
      setProducto({id: snapshot.id, ...snapshot.data()})
    })
    .finally (() => setLoading(false))
  }, [id])
  
  if (loading) return <h1>Cargando...</h1>

  const add = (count) => {
    addProduct({...producto, count});
  };

  return (
    <Container>
      <h1>{producto.name}</h1>
      <img src={producto.image} width = {200}/>
      <h2>{producto.description}</h2>
      <h2>Stock: {producto.stock}</h2>
      <h2>Precio: {producto.price}</h2>
      <ItemCount stock={producto.stock} add={add}/>
    </Container>
  )
}