import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, tododate,onWorkDone }) {
  // let todoName = "Buy Milk";
  // let tododate = "04/04/2024";

  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6 todo-text">{todoName}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={()=>onWorkDone(todoName)}>
            <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
