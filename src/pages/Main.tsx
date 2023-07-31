import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Form from "../components/Form";
import ToDos from "../components/ToDos";
import Header from "../components/Header";

// styled componenets
const StDiv = styled.div`
  display: gird;
  max-width: 1200px;
  min-width: 800px;
  height: 600px;
  margin: 0 auto;
`;

function Main() {
  return (
    <>
      <div>
        <GlobalStyle />
      </div>
      <StDiv>
        <Header />
        <Form />
        <ToDos isDone={false} />
        <ToDos isDone={true} />
      </StDiv>
    </>
  );
}

export default Main;
