import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteList, moveList } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const StLi = styled.li`
  list-style: none;
  width: 450px;
  margin: 0 auto;
  padding: 10px;
  height: 90px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #dbdfea;
`;

const StBtn = styled.button`
  width: 45px;
  background-color: #8294c4;
  border-style: none;
  border-radius: 5px;
  height: 23px;
  float: right;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

const StTitle = styled.h3`
  color: black;
  font-size: 20px;
  padding: 5px 0 0 5px;
`;

const StNote = styled.p`
  font-size: 17px;
  padding: 5px 0 0 5px;
`;

const ToDos = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <StLi key={value.id}>
      <StTitle>{value.title}</StTitle>
      <StNote>{value.note}</StNote>
      <StBtn
        onClick={() => {
          dispatch(deleteList(value.id));
        }}
      >
        X
      </StBtn>
      <StBtn onClick={() => dispatch(moveList(value.id))}>
        {value.isDone ? "취소" : "완료"}
      </StBtn>
      <StBtn>
        <Link to={`/infos/${value.id}`}>더보기</Link>
      </StBtn>
    </StLi>
  );
};

export default ToDos;
