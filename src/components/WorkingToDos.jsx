const WorkingToDos = ({ value, deleteList, doneList, che }) => {
  return (
    <li key={value.id} className="listStyle">
      <h3 className="titleStyle">{value.title}</h3>
      <p className="detailStyle">{value.detail}</p>
      <button onClick={() => deleteList(value.id)} className="btnStyle">
        X
      </button>
      <button
        onClick={() => doneList(value.id, value.title, value.detail)}
        className="btnStyle"
      >
        완료
      </button>
      {/* <button onClick={() => checkId(value.id)}>아이디</button> */}
    </li>
  );
};

export default WorkingToDos;
