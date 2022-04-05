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


  return (
    <div className="top-level-container">
      <div className="grid-container">
        {new Array(9).fill('').map((_, index) => <div className="grid-cell"
          onClick={(e) => draw(e, index + 1)}></div>)}
      </div>
    </div>
  );
}


export default App;
