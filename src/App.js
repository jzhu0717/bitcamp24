import './App.css';
import React, { useState } from "react";  

function App() {
  const [text, setText] = useState("");
  
  // when enter is pressed 
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target[0].value);
    
  };
  
  
  // visual stuff
  return (
    <div class="wrapper">
      <div class="box box1">
      <div class="box box2"></div>
    </div>
    <div class="overflow-auto">
      <div className="App">
      <header className="App-header">
        <img src={"https://purepng.com/public/uploads/large/one-v-buck-dpf.png"} className="App-logo" alt="Avatar" />
        <p>
          bring back costco churros 
        </p>
        <div className = "commentBox">
          <form onSubmit={handleSubmit}> 
            <input type = "text" id = "comment" placeholder = "thoughts?" />
           
          </form>
          <h1>
          <marquee class="css3" direction="up" width="1500"  behavior="alternate" >
            <marquee class="css4" behavior="alternate" scrollamount="15">
              most recent comment: {text}
            </marquee>
          </marquee>
          </h1>
        </div>
      </header>
      </div>
      </div>
    </div>
  );
}

export default App;
