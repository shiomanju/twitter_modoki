import {useState} from "react";

export default function Names(){
    const [name,setName]=useState<string>("");
    const [names,setNames]=useState<string[]>([]);

    const onClickButton=()=>{
        setNames((previousNames)=>[...previousNames,name]);
    }

    return(
        <div>
            <input 
                type="text"
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <button onClick={onClickButton}>名前を追加</button>
            <p>{names.join(", ")}</p>
        </div>
    )
}