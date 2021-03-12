import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hamburger from "Components/Hamburger";
import { BREAK_POINT_TABLET } from "Components/utilStyles";

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

const Nav = styled.nav<{ open: boolean }>`
	position: absolute;
	display: ${(props) => (props.open ? "flex" : "none")};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	margin-left: auto;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: rgb(0, 0, 0, 0.5);
	z-index: 1;
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		position: relative;
		display: flex;
		height: auto;
		color: #000;
		background-color: transparent;
	}
`;

const NavItemContainer = styled.div`
	width: 100%;
`;

const NavItem = styled(Link)`
	display: block;
	text-align: center;
	margin: 20px 0;
	padding: 20px 0;
	font-size: 25px;
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		display: inline-block;
		padding: 0;
		font-size: 14px;
		&:not(:last-child) {
			margin: 0 30px 0 0;
		}
	}
`;

const MenuIcon = styled(Hamburger)`
	margin-left: auto;
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		display: none;
	}
`;

export default function Head(): JSX.Element {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		const toggleOpen = !open;
		setOpen(toggleOpen);
	};

	return (
		<Header>
			<InnerHeader>
				<Logo to="/">
					<SVG
						src={require("../assets/gj_logo_01_svg.svg")}
						alt="곽경진의 포트폴리오"
					/>
				</Logo>
				<MenuIcon onClick={handleClick} open={open} />
				<Nav onClick={handleClick} open={open}>
					<NavItemContainer>
						<NavItem to="/about">About</NavItem>
						<NavItem to="/projects">Projects</NavItem>
						<NavItem to="/toyprojects">Toy</NavItem>
						<NavItem to="search">Search</NavItem>
					</NavItemContainer>
				</Nav>
			</InnerHeader>
		</Header>
	);
}
