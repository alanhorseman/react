import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { CardList } from "../components/cardList/CardList";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const q = id
      ? query(collection(db, "products"), where("category", "==", id))
      : query(collection(db, "products"));

    getDocs(q)
    .then((snapshot) => {
      setProductos(
        snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()};
        })
      );
    })
    .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1>Cargando...</h1>;

  return (
    <Container>
      <CardList productos={productos} />
    </Container>
  );
};
