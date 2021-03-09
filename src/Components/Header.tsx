import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BREAK_POINT_MOBILE: number = 768;
const BREAK_POINT_TABLET: number = 992;
const BREAK_POINT_PC: number = 1200;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0px 3px 5px 1px rgba(20, 20, 20, 0.2);
`;

const InnerHeader = styled.div`
  display: flex;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;

const Logo = styled(Link)`
  display: inline-block;
  width: 25px;
`;

const SVG = styled.img`
  width: 100%;
`;

const Nav = styled.nav`
  display: none;
  margin-left: auto;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default function Head() {
  return (
    <Header>
      <InnerHeader>
        <Logo to="/">
          <SVG
            src={require("../assets/gj_logo_01_svg.svg")}
            alt="곽경진의 포트폴리오"
          />
        </Logo>
        <Nav>
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/toyprojects">Toy</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="search">Search</NavItem>
        </Nav>
      </InnerHeader>
    </Header>
  );
}