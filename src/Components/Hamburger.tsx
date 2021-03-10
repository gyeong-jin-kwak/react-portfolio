import styled from "styled-components";

interface Istate {
  className?: string;
  onClick?: () => void;
}

const hamburgerLine = () => `
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
`;

const HamburgerButton = styled.button`
  display: block;
  border: none;
  background: transparent;
`;

const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

const HamburgerBar = styled.span`
  ${hamburgerLine}
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &:before,
  &:after {
    ${hamburgerLine}
    content: "";
    transition: transform 0.1s 0.2s ease-in-out;
  }

  &:before {
    top: -10px;
  }

  &:after {
    top: 10px;
  }
`;

export default function Hamburger({ className, onClick }: Istate) {
  return (
    <HamburgerButton className={className} onClick={onClick}>
      <HamburgerBox>
        <HamburgerBar />
      </HamburgerBox>
    </HamburgerButton>
  );
}
