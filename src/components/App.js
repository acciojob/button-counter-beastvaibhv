
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const {counter, setCounter} = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {counter} times</p>
      <button onClick ={()=>{
        setCounter(counter + 1);
      }}>Click me</button>
    </div>
  )
}

export default App;