import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const MyCard = ({ producto }) => (
  <Card key={producto.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={producto.image} />
    <Card.Body>
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>{producto.description}</Card.Text>
      <Card.Text>Stock: {producto.stock}</Card.Text>
      <Card.Text>Precio: {producto.price}</Card.Text>
      <Link to={`/detail/${producto.id}`} >
        <Button variant="primary">Ver detalles</Button>
      </Link>
    </Card.Body>
  </Card>
);
