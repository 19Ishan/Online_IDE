import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [code, setCode] = useState("");
  //code is used to save our code in local variable and setCode is used to change the code content of the textarea

  const [output, setOutput] = useState("");

  const handleSubmit = async () => {

    const payload = {
      language: "cpp",
      code: code,
    };

    try {
    const { data } = await axios.post("http://localhost:5000/run", payload);
    setOutput(data.output);
    } catch(err) {
      console.log(err.response);
    }
  };

  return (

    <div className="App">

      <h1>Online CODE Compiler</h1>
      <textarea 
        rows = "20" 
        cols = "100"
        value = {code}
        onChange = {(e) => {
          setCode(e.target.value); //e.target.value is the content of the textarea
        }} 
      ></textarea>

      <br />

      <button onClick = {handleSubmit}>
        Submit
      </button>

      <p>{ output }</p>  
      
    </div>
  );

}

export default App;
