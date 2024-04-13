import { now } from "mongoose";
import { useContext, useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

// function AddTodo({ onNewItem, inputError }) {
function AddTodo() {


  const {addNewItem,updateError} = useContext(TodoItemsContext)
  // console.log(todoItems);


  // const [todoName, setTodoName] = useState("");
  const formattedDueDate = new Date().toISOString().split("T")[0];
  // const [dueDate, setDueDate] = useState(formattedDueDate);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();


  // const handleNameChange = (event) => {
  //   let newName = event.target.value;
  //   setTodoName(newName);
  //   noOfUpdate.current+=1;
  // };
  // const handleDateChange = (event) => {
  //   let newDate = event.target.value;
  //   setDueDate(newDate);
  //   console.log(`no of updates are : ${noOfUpdate.current}`);
  // };

  const handleAddButtonClick = (event) => {
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;
    event.preventDefault();
    if (todoName === "" || dueDate === "") {
      updateError();
      return;
    }
    // onNewItem(todoName, dueDate);
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    todoDueDateElement.current.value=formattedDueDate;
    // setTodoName("");
    // setDueDate(formattedDueDate);
    // console.log(`todo name : ${todoName}, todo date : ${dueDate}`);
  };

  return (
    <>
      <form className="row kg-row Add-div" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            // value={todoName}
            // onChange={handleNameChange}
            placeholder="Enter your todo"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDateElement}
            // value={dueDate}
            //onChange={handleDateChange}
            defaultValue={formattedDueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
