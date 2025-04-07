import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {ItemCount} from "../components/itemCount/ItemCount";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductDetail.css";

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
    <Container className="detailContainer">
      <Card.Img className="detailImg" variant="top" src={producto.image}/>
      <Container className="infoCardDetail" >
          <Card.Title className="cardTitleDetail">{producto.name}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text>Stock: {producto.stock}</Card.Text>
          <Card.Text>Precio: {producto.price}</Card.Text>
        </Container>
      <ItemCount stock={producto.stock} add={add}/>
    </Container>
  )
}