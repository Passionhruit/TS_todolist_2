import uuid from "react-uuid";

// Action value

const ADD_LIST = "ADD_LIST" as const;
const DELETE_LIST = "DELETE_LIST" as const;
const MOVE_LIST = "MOVE_LIST" as const;

// 모든 액션 객체들에 대한 타입 준비
type TodosAction =
  | ReturnType<typeof addList>
  | ReturnType<typeof moveList>
  | ReturnType<typeof deleteList>;

// interface
interface Todo {
  id: string;
  title: string;
  note: string;
  isDone: boolean;
}

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type Todostate = Todo[];

// Initial State

const initialState: Todo[] = [
  { id: uuid(), title: "수학", note: "구구단 외우기", isDone: false },
  { id: uuid(), title: "국어", note: "받아쓰기", isDone: false },
  { id: uuid(), title: "영어", note: "단어 외우기", isDone: true },
  { id: uuid(), title: "과학", note: "실험하기", isDone: true },
];

// Action Creator

export const addList = (title: string, note: string) => {
  return {
    type: ADD_LIST,
    payload: {
      id: uuid(),
      title,
      note,
      isDone: false,
    },
  };
};

export const deleteList = (id: string) => {
  return {
    type: DELETE_LIST,
    payload: id,
  };
};

export const moveList = (id: string) => {
  return {
    type: MOVE_LIST,
    payload: id,
  };
};

// Reducer

const todos = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case DELETE_LIST:
      return state.filter((value) => value.id !== action.payload);
    case MOVE_LIST:
      return state.map((value) =>
        value.id === action.payload
          ? { ...value, isDone: !value.isDone }
          : value
      );
    default:
      return state;
  }
};

export default todos;
