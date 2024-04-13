import { useContext } from 'react';
import style from './WelcomeMessage.module.css';
import { TodoItemsContext } from '../store/todo-items-store';


const WelcomeMessage = () =>{
  const {todoItems} = useContext(TodoItemsContext)


    return( todoItems.length ===0 && <p className={style.welcome}>Enjoy your day !!!</p>)
}

export default WelcomeMessage