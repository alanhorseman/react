import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"

import data from "../data/MOCK_DATA.json"
import { CardList } from "../components/CardList"

export const Home = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    new Promise ((resolve, reject) => {
      setTimeout(() => resolve(data), 2000)
    })
    .then(respuesta => {
      if (!id){
        setProductos(respuesta)
      } else {
        const filtered = respuesta.filter(i => i.category === id)
        setProductos(filtered)
      }
    })
    .finally (() => setLoading(false))
  }, [id]);

  if (loading) return <h1>Cargando...</h1>

  return (
      <Container>
			<CardList productos={productos} />
		</Container>
  )
}