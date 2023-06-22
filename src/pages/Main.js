import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../redux/modules/todos";
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

const StH2 = styled.h2`
  margin-bottom: 15px;
  color: white;
`;

const StInnerDiv = styled.div`
  margin: auto 0;
`;

const StUl = styled.ul`
  margin-left: 70px;
  border: 10px;
  width: 500px;
  height: 600px;
  float: left;
`;

const StSpan = styled.span`
  font-size: 20px;
  color: white;
  font-weight: bold;
  &:first-child {
    margin-left: 50px;
  }
`;

const StForm = styled.form`
  margin-bottom: 15px;
`;

const StInput = styled.input`
  width: 200px;
  height: 35px;
  border: 2px solid white;
  border-radius: 10px;
  margin-right: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder {
    background-color: white;
    border-radius: 10px;
    font-size: 17px;
  }
`;

const StFormBtn = styled.button`
  font-size: 16px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  color: white;
  background: #b799ff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    border: 1px solid white;
  }
`;

function Main() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  // 여기에서 store 에 접근하여 값을 읽어온다 : useSelector
  const list = useSelector((state) => {
    return state.todos.list;
  });

  return (
    <>
      <div>
        <GlobalStyle />
      </div>
      <StDiv>
        <StH1>TO DO LIST</StH1>
        <StForm>
          <StSpan>
            Title{"\u00A0"}
            <StInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </StSpan>
          <StSpan>
            Note{"\u00A0"}
            <StInput
              type="text"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </StSpan>
          <StFormBtn
            onClick={(e) => {
              if (title.length !== 0 && note.length !== 0) {
                dispatch(addList(title, note));
              } else {
                alert("제목과 내용을 입력하세요.");
              }
              setTitle("");
              setNote("");
              e.preventDefault();
            }}
          >
            Add
          </StFormBtn>
        </StForm>
        <StInnerDiv>
          <StUl>
            <StH2>✏️ Working</StH2>

            {list.map((value) => {
              if (!value.isDone) {
                return <ToDos value={value} />;
              }
              return null;
            })}
          </StUl>
          <StUl>
            <StH2>🎉 Done</StH2>
            {list.map((value) => {
              if (value.isDone) {
                return <ToDos value={value} />;
              }
              return null;
            })}
          </StUl>
        </StInnerDiv>
      </StDiv>
    </>
  );
}

export default Main;
