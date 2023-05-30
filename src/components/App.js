
import React,{useState} from "react";
import './../styles/App.css';
import Input from './Input.js';

const App = () => {
  let [input,setInput] = useState('');
  return (
    <div className="parent">
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <p>{input}</p>
        <Input state={setInput}/>
    </div>
  )
}

export default App
