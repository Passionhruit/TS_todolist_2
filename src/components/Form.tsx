import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addList } from "../redux/modules/todos";

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

function Form() {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const dispatch = useDispatch();

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const noteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (title.length !== 0 && note.length !== 0) {
      dispatch(addList(title, note));
    } else {
      alert("제목과 내용을 입력하세요.");
    }
    setTitle("");
    setNote("");
    e.preventDefault();
  };

  return (
    <>
      <StForm>
        <StSpan>
          Title{"\u00A0"}
          <StInput type="text" value={title} onChange={titleHandler} />
        </StSpan>
        <StSpan>
          Note{"\u00A0"}
          <StInput type="text" value={note} onChange={noteHandler} />
        </StSpan>
        <StFormBtn onClick={addHandler}>Add</StFormBtn>
      </StForm>
    </>
  );
}

export default Form;
