import {useState} from "react";

export default function Counter(){
    const [count, setCount]=useState<number>(0);

    const onClickButton=()=>{
        setCount((previousCount)=>previousCount+1);
    };

    return(
        <div>
            <button onClick={onClickButton}>{count}</button>
        </div>
    )
}