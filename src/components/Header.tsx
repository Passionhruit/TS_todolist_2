import React from "react";
import { styled } from "styled-components";

const StH1 = styled.h1`
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

function Header() {
  return <StH1>TO DO LIST</StH1>;
}

export default Header;
