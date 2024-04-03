import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "1",
    "C",
    "=",
    "2",
    "3",
    "+",
    "4",
    "5",
    "-",
    "6",
    "7",
    "*",
    "8",
    "9",
    "/",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.buttonContainer}>
        {buttonsName.map((name) => (
          <button onClick={()=>onButtonClick(name)} key={name} className={style.button}>
            {name}
          </button>
        ))}
        {/* <button className={style.button}>C</button>
          <button className={style.button}>C</button>
          <button className={style.button}>C</button> */}
      </div>
    </>
  );
};

export default ButtonContainer;
