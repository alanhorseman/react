import { useState, useEffect, useContext, use } from "react";
import data from "../data/MOCK_DATA.json";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {ItemCount} from "../components/ItemCount";
import { CartContext } from "../contexts/CartContext";


export const ProductDetail = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  const {addProduct} = useContext(CartContext);


  useEffect(() =>{
    new Promise ((resolve, reject) => {
      setTimeout(() => resolve(data), 2000)
    })
    .then(respuesta => {
      const finded = respuesta.find(i => i.id === Number(id))
      if (finded) setProducto(finded)
      else alert("no existe")
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
      <img src={producto.img} width = {200}/>
      <h2>{producto.detail}</h2>
      <h2>Stock: {producto.stock}</h2>
      <ItemCount stock={producto.stock} add={add}/>
    </Container>
  )
}