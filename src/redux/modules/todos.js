import uuid from "react-uuid";

// Action value

const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const MOVE_LIST = "MOVE_LIST";

// Action Creator

export const addList = (title, note) => {
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

export const deleteList = (id) => {
  return {
    type: DELETE_LIST,
    payload: id,
  };
};

export const moveList = (id) => {
  return {
    type: MOVE_LIST,
    payload: id,
  };
};

// Initial State

const initialState = {
  list: [
    { id: uuid(), title: "수학", note: "구구단 외우기", isDone: false },
    { id: uuid(), title: "국어", note: "받아쓰기", isDone: false },
    { id: uuid(), title: "영어", note: "단어 외우기", isDone: true },
    { id: uuid(), title: "과학", note: "실험하기", isDone: true },
  ],
};

// Reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_LIST:
      return {
        ...state,
        list: state.list.filter((value) => value.id !== action.payload),
      };
    case MOVE_LIST:
      return {
        ...state,
        list: state.list.map((value) =>
          value.id === action.payload
            ? { ...value, isDone: !value.isDone }
            : value
        ),
      };
    default:
      return state;
  }
};

export default todos;
