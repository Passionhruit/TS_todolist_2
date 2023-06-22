import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

const StDiv = styled.div`
  display: grid;
  margin: 230px auto;
  max-width: 500px;
  height: 200px;
  border-radius: 15px;
  background-color: #dbdfea;
  padding: 15px;
`;

const StBtn = styled.button`
  width: 65px;
  background-color: #8294c4;
  border-style: none;
  border-radius: 5px;
  height: 25px;
  color: white;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

const StH1 = styled.h1`
  color: white;
  text-align: center;
`;

function Info() {
  const params = useParams();
  const navigate = useNavigate();

  const list = useSelector((state) => {
    return state.todos.list;
  });

  const data = list.find((value) => {
    return value.id === params.id;
  });
  return (
    <>
      <GlobalStyle />
      <StDiv>
        <StH1>TO DO LIST</StH1>

        <h2>{data.title}</h2>
        <p>{data.note}</p>
        <StBtn
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </StBtn>
      </StDiv>
    </>
  );
}

export default Info;
