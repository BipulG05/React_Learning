import style from "./FoodInput.module.css";

const FoodInput = ({handleOnchange,handleOnKeyDown}) => {
  // const handleOnchange = (event) =>{
  //     console.log(event.target.value)
  // }

  return (
    // <input
    //   className={style.foodInput}
    //   type="text"
    //   onChange={handleOnchange}
    //   placeholder="Enter Food name here"
    // />
    <input
      className={style.foodInput}
      type="text"
      onChange={handleOnchange}
      onKeyDown={handleOnKeyDown}
      placeholder="Enter food name here"
    />
  );
};

export default FoodInput;
