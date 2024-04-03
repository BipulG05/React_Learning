import style from "./Item.module.css"; 

const Item = ({ item,bought,handleBuyButton }) => {
    // console.log(style);
    // const handleBuyButton = (event) =>{
    //     console.log(event);
    //     console.log(`You buying : ${item}`)
    // }
    return (
        <li className={`${style['food-item']} ${bought && style['buyActive']}`}>
            <span className={style['food-span']}>{item}</span>
            <button className={`${style.button} btn btn-info`} onClick={handleBuyButton} >Buy</button>
            
            {/* <button className={`${style.button} btn btn-info`} onClick={(event)=>handleBuyButton(event)} >Buy</button> */}
        </li>
    );
};

export default Item;
