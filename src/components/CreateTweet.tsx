import { useState } from "react";
import styled from "styled-components";
type Props={
    onSubmitTweet:(name:string,tweet:string)=>void;
}

export default function CreateTweet(props:Props){
    const [tweetText,setTweetText]=useState<string>("")
    const [tweetName,setTweetName]=useState<string>("")
    type buttonProps={
        tweetText:string;
    }
    const Button=styled.button<buttonProps>`
    background-color: ${(props)=>(props.tweetText.length<=140? 'blue' : 'white')}}
    `;
        return (
        <div>
            <textarea onChange={(event)=>setTweetText(event.target.value)}></textarea>
            <input type="text" onChange={(event)=>setTweetName(event.target.value)}/>
            <Button tweetText={tweetText} onClick={()=>props.onSubmitTweet(tweetName,tweetText)}>{tweetText.length<=140 ? "ツイート" : "送信できません"}</Button>
        </div>
    )
}