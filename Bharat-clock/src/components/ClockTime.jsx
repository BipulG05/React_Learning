import { useEffect, useState } from "react";

let ClockTime = () =>{

    const [time,setTime] = useState(new Date());

    // console.log("Current time painted")

    // let time = new Date();

    useEffect(()=>{
        console.log("Interval has been setUp");

        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000)

        return () =>{
            clearInterval(intervalId);
            console.log("Cancelled the interval");
        }
    },[])


    return <p className="lead">This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default ClockTime