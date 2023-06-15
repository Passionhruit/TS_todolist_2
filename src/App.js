import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [list, setList] = useState([
    { id: 1, title: "수학", detail: "구구단 외우기", isDone: false },
    { id: 2, title: "국어", detail: "받아쓰기", isDone: false },
    { id: 3, title: "영어", detail: "단어 외우기", isDone: true },
    { id: 4, title: "과학", detail: "주기율표 외우기", isDone: true },
  ]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const detailChangeHandler = (e) => {
    setDetail(e.target.value);
  };

  const addList = (e) => {
    if (title.length !== 0 && detail.length !== 0) {
      const newList = {
        id: list.length + 1,
        title,
        detail,
        isDone: false,
      };
      setList([...list, newList]);
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
    e.preventDefault(); // 폼 제출시 새로고침을 막음
    setTitle(""); // Title, Detail 빈 값으로
    setDetail("");
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
  };

  // doneList 로 이동
  const doneList = (id) => {
    setList((updatedList) => {
      const movedList = updatedList.map((value) => {
        if (value.id === id) {
          // id가 일치하는 updated.List의 value의 isDone을 true로 리턴
          return {
            ...value,
            isDone: true,
          };
        }
        return value;
      });
      return movedList;
    });
  };

  // workingList 로 이동
  const workingList = (id) => {
    setList((updatedList) => {
      const movedList = updatedList.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isDone: false,
          };
        }
        return value;
      });
      return movedList;
    });
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
            Detail{"\u00A0"}
            <input type="text" value={detail} onChange={detailChangeHandler} />
          </span>
          <button onClick={addList}>Add</button>
        </form>
        <div className="innderDivStyle">
          <ul className="ulStyle">
            <h2>✏️ Working</h2>

            {list.map((value) => {
              if (value.isDone === false) {
                return (
                  <li key={value.id} className="listStyle">
                    <h3 className="titleStyle">{value.title}</h3>
                    <p className="detailStyle">{value.detail}</p>
                    <button
                      onClick={() => deleteList(value.id)}
                      className="btnStyle"
                    >
                      X
                    </button>
                    <button
                      onClick={() =>
                        doneList(value.id, value.title, value.detail)
                      }
                      className="btnStyle"
                    >
                      완료
                    </button>
                  </li>
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
                  <li key={value.id} className="listStyle">
                    <h3 className="titleStyle">{value.title}</h3>
                    <p className="detailStyle">{value.detail}</p>
                    <button
                      onClick={() => deleteList(value.id)}
                      className="btnStyle"
                    >
                      X
                    </button>
                    <button
                      onClick={() =>
                        workingList(value.id, value.title, value.detail)
                      }
                      className="btnStyle"
                    >
                      진행중
                    </button>
                  </li>
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
