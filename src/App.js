import React, { useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [list, setList] = useState([
    { id: 1, title: "수학", note: "구구단 외우기", isDone: false },
    { id: 2, title: "국어", note: "받아쓰기", isDone: false },
    { id: 3, title: "영어", note: "단어 외우기", isDone: true },
    { id: 4, title: "과학", note: "실험하기", isDone: true },
  ]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const noteChangeHandler = (e) => {
    setNote(e.target.value);
  };

  const addList = (e) => {
    if (title.length !== 0 && note.length !== 0) {
      const newList = {
        id: list.length + 1,
        title,
        note,
        isDone: false,
      };
      setList([...list, newList]);
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
    e.preventDefault(); // 폼 제출시 새로고침을 막음
    setTitle(""); // Title, Note 빈 값으로
    setNote("");
  };

  // 요소 삭제
  const deleteList = (id) => {
    const updatedList = list
      .filter((value) => value.id !== id) // value.id 가 일치하지 않는 리스트로 거름
      .map((value, i) => {
        // 업데이트된 리스트 id 각각의 값을 i + 1 로 갱신 (중복 피함)
        return { ...value, id: i + 1 };
      });
    setList(updatedList);
    return updatedList;
  };

  //doneList, workingList 로 이동
  const moveList = (id, title, note, isDone) => {
    const updatedList = deleteList(id);
    const newDoneList = {
      id: updatedList.length + 1,
      title: title,
      note: note,
      isDone: isDone ? false : true,
    };
    setList([...updatedList, newDoneList]);
  };

  // doneList 로 이동
  // const doneList = (id) => {
  //   setList((updatedList) =>
  //     updatedList.map((value) => ({
  //       ...value,
  //       isDone: value.id === id ? true : value.isDone, // value.id가 id 와 일치하면 true, 아니라면 기존의 값으로 유지
  //     }))
  //   ); // 그 값을 setList 로 입력
  // };

  // //workingList 로 이동
  // const workingList = (id) => {
  //   setList((updatedList) =>
  //     updatedList.map((value) => ({
  //       ...value,
  //       isDone: value.id === id ? false : value.isDone,
  //     }))
  //   );
  // };

  const checkId = (id) => {
    alert(`${id}`);
  };

  return (
    <>
      <div className="divStyle">
        <h1>TO DO LIST</h1>
        <form>
          <span className="spanStyle">
            Title{"\u00A0"}
            <input type="text" value={title} onChange={titleChangeHandler} />
          </span>
          <span className="spanStyle">
            Note{"\u00A0"}
            <input type="text" value={note} onChange={noteChangeHandler} />
          </span>
          <button onClick={addList}>Add</button>
        </form>
        <div className="innderDivStyle">
          <ul className="ulStyle">
            <h2>✏️ Working</h2>

            {list.map((value) => {
              if (value.isDone === false) {
                return (
                  <ToDos
                    key={value.id}
                    value={value}
                    deleteList={deleteList}
                    moveList={moveList}
                    checkId={checkId}
                  />
                );
              }
              return null;
            })}
          </ul>
          <ul className="ulStyle">
            <h2>🎉 Done</h2>
            {list.map((value) => {
              if (value.isDone === true) {
                return (
                  <ToDos
                    key={value.id}
                    value={value}
                    deleteList={deleteList}
                    moveList={moveList}
                    checkId={checkId}
                  />
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
