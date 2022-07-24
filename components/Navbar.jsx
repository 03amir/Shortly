import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import styled from "styled-components";

function navbar(props) {
  return (
    <NavWrapper>
      <NavLists>
        <Image src={logo} />
        <h4>Features</h4>
        <h4>Pricing</h4>
        <h4>Resources</h4>
      </NavLists>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 35px;
  color: #9e9aa7;

  h4 {
    &:hover {
      color: #35323e;
      cursor: pointer;
    }
  }
`;

const NavLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 38%;
  font-family: ${(props) => props.theme.poppins};
`;

export default navbar;
