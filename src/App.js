import { useState } from "react";
import './App.css';
// Components
import LevelInfo from './components/LevelInfo';
import Choice from './components/Choice';

function App() {
    // Functions
    const[question, setQuestion] = useState(""); // setting the question
    const[answer, setAnswer] = useState("");

    return (
    <div className="App">
        <LevelInfo />
        <Choice />
    </div>
  );
}

export default App;
