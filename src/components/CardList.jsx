import Container from "react-bootstrap/Container";

import {MyCard} from "./MyCard"

export const CardList = ({productos}) => (
  <Container className="d-flex flex-wrap mt-3">
    {productos.map(producto => (
      <MyCard key={producto.id} producto={producto} />
    ))}
  </Container>
)