import React from "react";
import styled from "styled-components";

interface Props {
	className?: string;
	onClick: () => void;
	open: boolean;
}

const hamburgerLine = () => `
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
`;

const HamburgerButton = styled.button`
	position: relative;
	display: block;
	border: none;
	background: transparent;
	z-index: 5;
`;

const HamburgerBox = styled.span`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 24px;
`;

const HamburgerBar = styled.span<{ open: boolean }>`
	${hamburgerLine}
	top: 50%;
	background-color: ${(props) => (props.open ? "transparent" : "#000")};
	transform: translateY(-50%);
	transition: all 0.2s ease-in-out;

	&:before,
	&:after {
		${hamburgerLine}
		content: "";
		background-color: ${(props) => (props.open ? "#fff" : "#000")};
		transition: all 0.2s ease-in-out;
	}

	&:before {
		top: -10px;
		transform: ${(props) =>
			props.open
				? "translateY(10px) rotate(45deg)"
				: "translateY(0) rotate(0)"};
	}

	&:after {
		top: 10px;
		transform: ${(props) =>
			props.open
				? "translateY(-10px) rotate(-45deg)"
				: "translateY(0) rotate(0)"};
	}
`;

const Hamburger: React.FC<Props> = ({ onClick, open, className }: Props) => {
	if (onClick) {
		return (
			<HamburgerButton onClick={onClick} className={className}>
				<HamburgerBox>
					<HamburgerBar open={open} />
				</HamburgerBox>
			</HamburgerButton>
		);
	}
	return null;
};

Hamburger.defaultProps = {
	className: "",
};

export default Hamburger;
