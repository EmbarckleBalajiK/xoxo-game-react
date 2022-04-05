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
        <div className="grid-cell"
          onClick={(e) => draw(e, 1)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 2)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 3)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 4)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 5)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 6)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 7)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 8)}></div>
        <div className="grid-cell"
          onClick={(e) => draw(e, 9)}></div>
      </div>
    </div>
  );
}

export default App;
