import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

const StyledBtn = styled.button`
  widows: 250px;
  height: 30px;
  background-color: #3c783c;
  padding: 20px 20px;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export default Button;
