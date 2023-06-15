const DoneToDos = ({ value, deleteList, workingList, checkId }) => {
  return (
    <li key={value.id} className="listStyle">
      <h3 className="titleStyle">{value.title}</h3>
      <p className="detailStyle">{value.detail}</p>
      <button onClick={() => deleteList(value.id)} className="btnStyle">
        X
      </button>
      <button
        onClick={() => workingList(value.id, value.title, value.detail)}
        className="btnStyle"
      >
        진행중
      </button>
      {/* <button onClick={() => checkId(value.id)}>아이디</button> */}
    </li>
  );
};

export default DoneToDos;
