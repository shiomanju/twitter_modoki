import TwitterModoki from "./components/TwitterModoki";
function App() {
  function onSubmitTweet(name:string,tweet:string){
    console.log(name+tweet);
    
  }
  return (
    <>
    <TwitterModoki></TwitterModoki>
    </>
  )
}

export default App
