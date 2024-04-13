import { now } from "mongoose";
import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem,inputError }) {
  const [todoName, setTodoName] = useState("");
  const formattedDueDate = new Date().toISOString().split('T')[0];
  const [dueDate, setDueDate] = useState(formattedDueDate);

  const handleNameChange = (event) => {
    let newName = event.target.value;
    setTodoName(newName);
  };
  const handleDateChange = (event) => {
    let newDate = event.target.value;
    setDueDate(newDate);
  };

  const handleAddButtonClick = () => {
    if(todoName==='' || dueDate===''){
      inputError();
      return;
    } 
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate(formattedDueDate);
    // console.log(`todo name : ${todoName}, todo date : ${dueDate}`);
  };

  return (
    <>
      <div className="row kg-row Add-div">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            onChange={handleNameChange}
            placeholder="Enter your todo"
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleAddButtonClick}
            className="btn btn-success kg-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
