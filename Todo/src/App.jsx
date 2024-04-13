import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
// import Todoitem1 from "./components/TodoItem";
// import Todoitem2 from "./components/Todoitem2";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import ErrorMessage from "./components/Errormessage";
// import TodoItem from "./components/TodoItem";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/4/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "4/4/2024",
  //   },
  //   {
  //     name: "Go to Marker",
  //     dueDate: "4/4/2024",
  //   },
  // ];
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleOnNewItem = (itemName, itemDueDate) => {
    setInputError(false);
    // console.log(`new item : ${itemName}, Item date: ${itemDueDate}`);
    const newitem = {
      name: itemName,
      dueDate: itemDueDate,
    };
    const newItems = [...todoItems, newitem];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    // console.log(`Work done : ${todoItemName}`);
    const newItems = todoItems.filter(item=>item.name!==todoItemName);
    // console.log(newItems);
    setTodoItems(newItems);
  }
  const [inputError,setInputError] = useState(false);
  const handleInputError = () =>{
    setInputError(true);
  }
  const handleErrorMessage = () => {
    setInputError(!inputError);
  }
  

  return (
    <>
      <center>
        <Container>
          {/* <center className="todo-container"> */}
          <AppName />
          <AddTodo inputError={handleInputError} onNewItem={handleOnNewItem} />
          {inputError && <ErrorMessage show={inputError} updateError={handleErrorMessage} />}
          {todoItems.length == 0 && <WelcomeMessage />}
          <TodoItems onDeleteClck={handleDeleteItem} todoItems={todoItems} />

          {/* <Todoitem1 /> */}
          {/* <Todoitem2 /> */}
          {/* </center> */}
        </Container>
      </center>
    </>
  );
}

export default App;
