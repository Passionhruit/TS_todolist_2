const ToDos = ({ value, deleteList, moveList, checkId }) => {
  return (
    <li key={value.id} className="listStyle">
      <h3 className="titleStyle">{value.title}</h3>
      <p className="noteStyle">{value.note}</p>
      <button onClick={() => deleteList(value.id)} className="btnStyle">
        X
      </button>
      <button
        onClick={() =>
          moveList(value.id, value.title, value.note, value.isDone)
        }
        className="btnStyle"
      >
        {value.isDone ? "취소" : "완료"}
      </button>
      {/* <button onClick={() => checkId(value.id)}>아이디</button> */}
    </li>
  );
};

export default ToDos;
