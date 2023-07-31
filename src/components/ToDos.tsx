import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteList, moveList } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

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

type IsDone = {
  isDone: boolean;
};

const ToDos = ({ isDone }: IsDone) => {
  const dispatch = useDispatch();

  // 여기에서 store 에 접근하여 값을 읽어온다 : useSelector

  const todos = useSelector((state: RootState) => {
    return state.todos;
  });

  const deleteHandler = (id: string): void => {
    dispatch(deleteList(id));
  };

  const moveHandler = (id: string): void => {
    dispatch(moveList(id));
  };

  return (
    <StInnerDiv>
      <StUl>
        <StH2>{isDone ? "🎉 Done" : "✏️ Working"}</StH2>

        {todos.map((value: any) =>
          (value.isDone && isDone) || (!value.isDone && !isDone) ? (
            <StLi key={value.id}>
              <StTitle>{value.title}</StTitle>
              <StNote>{value.note}</StNote>
              <StBtn onClick={() => deleteHandler(value.id)}>X</StBtn>
              <StBtn onClick={() => moveHandler(value.id)}>
                {value.isDone ? "취소" : "완료"}
              </StBtn>
              <StBtn>
                <Link to={`/infos/${value.id}`}>더보기</Link>
              </StBtn>
            </StLi>
          ) : null
        )}
      </StUl>
    </StInnerDiv>
  );
};

export default ToDos;
