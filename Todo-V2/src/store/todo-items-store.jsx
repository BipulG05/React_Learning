import { createContext } from "react";
import { useReducer, useState } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
  inputError: () => {},
});

// reducer function *******
const todoItemReduce = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};


const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoitems] = useReducer(todoItemReduce, []);

  const handleOnNewItem = (itemName, itemDueDate) => {
    setInputError(false);
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoitems(newItemAction);
  };
  const handleDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoitems(deleteItemAction);
  };

  const [inputError, setInputError] = useState(false);
  const handleInputError = () => {
    setInputError(true);
  };
  const handleErrorMessage = () => {
    // console.log("Error message");
    setInputError(!inputError);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: handleOnNewItem,
        deleteItem: handleDeleteItem,
        show: inputError,
        updateError : handleErrorMessage,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
