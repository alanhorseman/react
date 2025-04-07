import Container from "react-bootstrap/Container";

import {MyCard} from "./myCard/MyCard"

import "./CardList.css";

export const CardList = ({productos}) => (
  <Container className="CardListContainer">
    {productos.map(producto => (
      <MyCard key={producto.id} producto={producto} />
    ))}
  </Container>
)