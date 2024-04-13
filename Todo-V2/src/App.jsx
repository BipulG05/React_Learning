import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
// import Todoitem1 from "./components/TodoItem";
// import Todoitem2 from "./components/Todoitem2";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import ErrorMessage from "./components/Errormessage";
import TodoItemsContextProvider from "./store/todo-items-store";

// import TodoItem from "./components/TodoItem";

// reducer function *******
// const todoItemReduce = (currentTodoItems, action) => {
//   let newTodoItems = currentTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currentTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currentTodoItems.filter(
//       (item) => item.name !== action.payload.itemName
//     );
//   }
//   return newTodoItems;
// };

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
  // const initialTodoItems = [];
  // const [todoItems, setTodoItems] = useState([]);
  // const [todoItems, dispatchTodoitems] = useReducer(todoItemReduce, []);

  // const handleOnNewItem = (itemName, itemDueDate) => {
  //   setInputError(false);
  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate,
  //     },
  //   };
  //   dispatchTodoitems(newItemAction);

  // console.log(`new item : ${itemName}, Item date: ${itemDueDate}`);
  // const newitem = {
  //   name: itemName,
  //   dueDate: itemDueDate,
  // };
  // const newItems = [...todoItems, newitem];
  // setTodoItems(newItems);
  // setTodoItems((currentvalue) => {
  //   const newTodoItems = [
  //     ...currentvalue,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   return newTodoItems;
  // });
  // };

  // const handleOnNewItem = (itemName, itemDueDate) => {
  //   setInputError(false);
  //   setTodoItems((currentvalue) => {
  //     [
  //       ...currentvalue,
  //       { name: itemName, dueDate: itemDueDate },
  //     ];

  //   });
  // };

  // const handleDeleteItem = (todoItemName) => {
  //   // console.log(`Work done : ${todoItemName}`);
  //   // const newItems = todoItems.filter((item) => item.name !== todoItemName);
  //   // console.log(newItems);
  //   // setTodoItems(newItems);
  //   const deleteItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName: todoItemName,
  //     },
  //   };
  //   dispatchTodoitems(deleteItemAction);
  // };

  // const [inputError, setInputError] = useState(false);
  // const handleInputError = () => {
  //   setInputError(true);
  // };
  // const handleErrorMessage = () => {
  //   setInputError(!inputError);
  // };

  // const defaultTodoItems = [
  //      {
  //         name: "Buy Milk",
  //         dueDate: "4/4/2024",
  //       },
  //       {
  //         name: "Go to college",
  //         dueDate: "4/4/2024",
  //       },
  //       {
  //         name: "Go to Marker",
  //         dueDate: "4/4/2024",
  //       },
  // ]

  return (
    <>
      <TodoItemsContextProvider>
        <center>
          {/* <TodoItemsContext.Provider
          value={{
            todoItems: todoItems,
            addNewItem: handleOnNewItem,
            deleteItem: handleDeleteItem,
            inputError: handleInputError,
          }}
        > */}
          <Container>
            {/* <center className="todo-container"> */}
            <AppName />
            {/* <AddTodo
              inputError={handleInputError}
              onNewItem={handleOnNewItem}
            /> */}
            <AddTodo />
            {/* {inputError && (
              <ErrorMessage
                show={inputError}
                updateError={handleErrorMessage}
              />
            )} */}

            <ErrorMessage />
            {/* {todoItems.length == 0 && <WelcomeMessage />} */}
            <WelcomeMessage />
            {/* <TodoItems onDeleteClck={handleDeleteItem} todoItems={todoItems} /> */}
            <TodoItems />

            {/* <Todoitem1 /> */}
            {/* <Todoitem2 /> */}
            {/* </center> */}
          </Container>
          {/* </TodoItemsContext.Provider> */}
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
