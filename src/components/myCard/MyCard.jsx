import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./MyCard.css";

export const MyCard = ({ producto }) => (
  <Container className="cardContainerHome">
    <Card className="cardHome" key={producto.id}>
      <Card.Img className="imgCarddHome" variant="top" src={producto.image} />
      <Card.Body>
        <Container className="infoCardHome" >
          <Card.Title className="cardTitleHome">{producto.name}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text>Stock: {producto.stock}</Card.Text>
          <Card.Text>Precio: {producto.price}</Card.Text>
        </Container>
        <Container className="btnContainerHome">
          <Link to={`/detail/${producto.id}`}>
            <Button className="btnCardHome" variant="primary">Ver detalles</Button>
          </Link>
        </Container>
      </Card.Body>
    </Card>
  </Container>
);
