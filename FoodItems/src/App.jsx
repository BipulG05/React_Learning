import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import React, { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["sabzi", "Green vagitable", "Roti", "Salad", "Ghee"];
  // let foodItems = [];
  // let [foodItems,setFooditems] = useState(["sambar", "Green vagitable", "Roti", "Salad", "Ghee"]);
  let [foodItems,setFooditems] = useState([]);

    // let testStateArr = useState("Food Item Enter by user");
    // let textStateval = testStateArr[0];
    // let setTextStateMethod = testStateArr[1];
    // let [textStateval,setTextStateMethod] = useState("Food Item Enter by user");
    let [textStateval,setTextStateMethod] = useState();


    // console.log(`current value of textState : ${testStateArr}`);
    // console.log(`current value of textState : ${textStateval}`);


  // let textToShow ="Food Item Enter by user" ;
  const handleOnchange = (event) =>{
      // console.log(event.target.value);
      // textToShow = event.target.value;
      // setTextStateMethod(event.target.value);
  }
  const OnKeyDown = (event) =>{
    if(event.key === 'Enter' && event.target.value!==''){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      setFooditems(newItems);
      // console.log("Food value entered is : ",newFoodItem);
      // console.log("Food value entered is : ",newItems);

    }
    // console.log(event);
    // setTextStateMethod(event.target.value);
  }


  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        <FoodInput handleOnKeyDown={OnKeyDown} handleOnchange={handleOnchange}/>
        <ErrorMessage items={foodItems} />
        {/* <p>{textStateval}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      <Container>
        <p>Above is the list of hellty food items. You can eat those item and gain a healty life.</p>
      </Container>
    </>
  );
}

export default App;
