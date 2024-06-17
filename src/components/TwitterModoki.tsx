import { useState } from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
export default function TwitterModoki() {
    const [tweets, setTweets] = useState<{ name: string, text: string }[]>([])
    function onSubmitTweet(name: string, text: string) {
        setTweets((previousTweets)=>[...previousTweets,{name:name,text:text}]);
    }

    return (
        <>
            <h1>Twitterもどき</h1>
            <CreateTweet onSubmitTweet={onSubmitTweet} />
            <div>
                {tweets.length===0 || tweets.map((tweet) => (
                    <Tweet name={tweet.name} text={tweet.text}></Tweet>
                ))}
                {tweets.length===0 && "ツイートはありません"}
            </div>
        </>
    )
}