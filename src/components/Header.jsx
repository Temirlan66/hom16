import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Logo>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
            })}
            to="/logo"
          >
            Logo
          </NavLink>
        </Logo>
        <StyledUl>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
              })}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
              })}
              to="/myCard"
            >
              My Card
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
              })}
              to="/myOrders"
            >
              My Orders
            </NavLink>
          </li>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  background-color: #1b5ee5;
  padding: 20px 20px;

  nav {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.h3`
  font-size: 20px;
  margin-left: 90px;

  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledUl = styled.ul`
  color: white;
  font-size: 20px;
  list-style: none;
  display: flex;
  gap: 90px;
  margin-right: 90px ;
 

  a {
    color: white;
    text-decoration: none;
  }
`;
export default Header;
