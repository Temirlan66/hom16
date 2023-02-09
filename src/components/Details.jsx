import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Details = ({ products }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const itemProduct = products.find((item) => item.id == id);
    setProduct(itemProduct);
  }, [products, id]);
  return (
    <MainContainer>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 500px;
  height: 150px;
  background-color: white;
  color: #3434b6;
  margin: 0 auto;
  border-radius: 30px;
  text-align: center;
  margin-top: 50px;
  padding: 40px 20px;
`;
export default Details;
