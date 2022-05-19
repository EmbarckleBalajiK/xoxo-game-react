import { useState, useEffect } from "react";
import "./App.css";

const possibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [data, setData] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState('');

  const updatedData = [...data];
  function SettingData(Index, DataValue = "O") {
    updatedData[Index] = DataValue;
    setData(updatedData);
    setTurn(DataValue === "X" ? "O" : "X");
  }

  const handleOnClick = (_, index) => {
    if (data[index] === '') {
      SettingData(index, "X");
    }
  }
  useEffect(() => {
    for (let i in possibilities) {
      if ((((possibilities[i].filter((value) => data[value] === "X").length) === 2) && ((possibilities[i].filter((value) => data[value] === "").length) === 1) && (turn === "O")) || ((possibilities[i].filter((value) => data[value] === "O").length) === 2 && (possibilities[i].filter((value) => data[value] === "").length) === 1 && turn === "O")) {
        for (let j in possibilities[i]) {
          if (data[possibilities[i][j]] === '') {
            SettingData(possibilities[i][j]);            
            return
          }
        }
        return
      }
    }
    if ((data.filter((value) => value === "").length) === 0 && turn === "O") {
      setWinner("Game is TIE");
    }
    else if (turn === "O") {      
      if (data[4] === '') {
        SettingData(4);
      }
      else {
        for (let i in data) {
          if (data[i] === '') {
            SettingData(i);
            return
          }
        }
      }
    }
    // ********************Winnig Check***********************
    for (let i = 0; i < possibilities.length; i++) {
      let [a, b, c] = possibilities[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        console.log("WINNER:", data[a]);
        setWinner(`Winner: ${data[a]}`);
        return
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="top-level-container">
      {winner === '' ? <div className="grid-container">
        {new Array(9).fill('').map((_, index) => <div key={`cell-${index}`} className="grid-cell"
          onClick={(e) => handleOnClick(e, index)}>{data[index]}</div>)}
      </div> : <div className="grid-winner">{winner}</div>}
    </div>
  );
}

export default App;
