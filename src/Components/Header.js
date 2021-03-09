import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0px 3px 5px 1px rgba(20, 20, 20, 0.2);
`;

const Logo = styled(Link)``;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

const NavItem = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default function Head() {
  return (
    <Header>
      <Logo to="/">
        <img
          src={require("../assets/gj_logo_01_svg.svg")}
          alt="곽경진의 포트폴리오"
        />
      </Logo>
      <Nav>
        <NavItem to="/profile">Profile</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/toyprojects">Toy Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="search">Search</NavItem>
      </Nav>
    </Header>
  );
}
