import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeleteClck }) => {
  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            tododate={item.dueDate}
            onWorkDone = {onDeleteClck}
          />
        ))}

        {/* <TodoItem todoName="Buy chocolate" tododate="04/04/2024" /> */}
      </div>
    </>
  );
};

export default TodoItems;
