import { useState, useEffect } from "react";
import data from "../data/MOCK_DATA.json";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

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

  return (
    <Container>
      <h1>{producto.name}</h1>
      <img src={producto.img} />
      <h2>{producto.detail}</h2>
    </Container>
  )
}