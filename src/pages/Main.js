import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Form from "../components/Form";
import ToDos from "../components/ToDos";

// styled componenets
const StDiv = styled.div`
  display: gird;
  max-width: 1200px;
  min-width: 800px;
  height: 600px;
  margin: 0 auto;
`;

const StH1 = styled.h1`
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

function Main() {
  return (
    <>
      <div>
        <GlobalStyle />
      </div>
      <StDiv>
        <StH1>TO DO LIST</StH1>
        <Form />
        <ToDos isDone={false} />
        <ToDos isDone={true} />
      </StDiv>
    </>
  );
}

export default Main;
