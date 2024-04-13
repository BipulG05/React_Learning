import style from "./Errormessage.module.css";
import { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { IoCloseCircle } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

// function ErrorMessage({ show, updateError }) {
function ErrorMessage() {
  //   const [show, setShow] = useState(true);
  const { show, updateError } = useContext (TodoItemsContext);

  // console.log(show,updateError);

  return ( 
    <>
      {show && <Alert className={style.errorDiv} show={show} variant="danger">
        {/* <Alert.Heading>My Alert</Alert.Heading> */}
        <p className={style.InputErrorMessage}>All fields are required.</p>
        {/* <div className="d-flex justify-content-end"> */}
        <Button
          className={style.closeError}
          onClick={updateError}
          variant="outline-danger"
        >
          <IoCloseCircle />
        </Button>
        {/* </div> */}
      </Alert>}

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
      {/* {!show && <Button onClick={updateError}>Show Alert</Button>} */}
    </>
  );
}

export default ErrorMessage;
