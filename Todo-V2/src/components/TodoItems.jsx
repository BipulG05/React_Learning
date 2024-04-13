import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

// const TodoItems = ({ todoItems,onDeleteClck }) => {
const TodoItems = () => {


  const todoItemsFromContext = useContext(TodoItemsContext)
  // console.log(todoItemsFromContext);

  return (
    <>
      <div className={style.itemsContainer}>
        {/* {todoItems.map((item) => ( */}
        {todoItemsFromContext.todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            tododate={item.dueDate}
            onWorkDone = {todoItemsFromContext.deleteItem}
          />
        ))}

        {/* <TodoItem todoName="Buy chocolate" tododate="04/04/2024" /> */}
      </div>
    </>
  );
};

export default TodoItems;
