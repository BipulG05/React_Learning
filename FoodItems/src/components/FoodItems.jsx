import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {

    let [activeItems,setActiveItems] = useState([]);

    let onBuyButton = (item,event) =>{
        let newItems = [...activeItems,item];
        setActiveItems(newItems);
    }


  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            item={item}
            bought={activeItems.includes(item)}
            // handleBuyButton={() => console.log(`${item} Bought`)}
            handleBuyButton={(event)=>onBuyButton(item,event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
