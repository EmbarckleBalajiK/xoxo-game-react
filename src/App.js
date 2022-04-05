import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(['', '', '', '', '',
    '', '', '', ''])
  const [turn, setTurn] = useState(0);
  const draw = (event, index) => {
    if (data[index - 1] === '') {
      const current = turn === 0 ? "X" : "O"
      data[index - 1] = current;
      event.target.innerText = current;
      setData[index - 1] = current
      setTurn(turn === 0 ? 1 : 0)
    }
  }
 
  const box = () => {
    const arr = [1,2,3,4,5,6,7,8,9]
    return arr.map((val) => {
      return <div className="grid-cell"
      onClick={(e) => draw(e, val)}></div>
    });
  };

  return (
    <div className="top-level-container">
      <div className="grid-container">
        {box()}        
      </div>
    </div>
  );
}


export default App;
