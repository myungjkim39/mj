import './App.css';
import { useState, useEffect } from "react";

function App() {
  // Declare a new state cariable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [subtractedCount, setSubtractedCount] = useState(100);
  
  
  function updateCount() {
    setCount(count + 1)
    console.log("clicked");
  }

  function updateSubtractedCount() {
    setSubtractedCount(subtractedCount - 1)
    console.log("clicked");
  }

  useEffect(function () {
    // This code will run on every render (every update) of the component
    console.log('Component re-rendered!');
});

useEffect(function (){
  // This code will run every time the count state variable is updated
  console.log('Counter state variable was updated')
},
[count]
);

useEffect(function(){
  // This useEffect is triggered only when the component mounts
  console.log('Component rendered for the FIRST time ONLY')
},
[]
);

  return (
    <div className="App">
      <div> count: {count} </div>
      <br/>
      <button onClick={updateCount}>Add one!</button>
      <br/>
       <div> count: {subtractedCount} </div>
       <br/>
       <button onClick={updateSubtractedCount}>Subtract one!</button> </div> 
  );
}

export default App;
