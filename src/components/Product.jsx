import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductItem from "./ProductItem";
const Product = ({ products }) => {
  return (
    <>
      <Container>
        <ul>
          {products.map((item) => (
            <Link to={`/products/${item.id}/details`} key={item.id}>
              <li>
                <ProductItem
                  title={item.title}
                  // description={item.description}
                  img={item.images}
                />
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 200px;
  background-color: white;
  padding: 20px 20px;
  border-radius: 10px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
  }

  li {
    list-style: none;
    color: #978d8d;
  }

  a {
    text-decoration: none;
  }
  a :hover {
    color: orange;
  }
`;

export default Product;
