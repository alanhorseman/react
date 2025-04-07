import { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ItemCount.css";

export const ItemCount = ({ stock, add }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleCart = () => {
    setCount(1);
    add(count);
  };

  return (
    <Container className="d-flex align-items-center gap-2 containerItemCount">
      <Container className="containerCount">
        <ButtonGroup className="groupCount">
          <Button variant="outline-secondary" onClick={handleSubtract}>
            -
          </Button>
          <span className="d-flex align-items-center px-3 fw-bold">{count}</span>
          <Button variant="outline-secondary" onClick={handleAdd}>
            +
          </Button>
        </ButtonGroup>
      </Container>
      <Container className="containerBtn">
        <Button className="countBtn" variant="primary" onClick={handleCart}>
          Agregar al carrito
        </Button>
      </Container>
    </Container>
  );
};
