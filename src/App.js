
import { useState} from "react";

const style_1 = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
};
const style_2 = {
  
    width: 500,
    height: 500,
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "lightblue",
    
};
const style = {
  textAlign: "center",
  fontSize: 100,
	border: "6px solid darkblue",
	borderRadius: "10px",
	width: "150px",
	height: "150px",
	margin: "0 auto",
  fontWeight: "800",
	cursor: "pointer",
};

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
    <div style={style_1}>
      <div style={style_2}>
        <div style={style}
                onClick={(e) => draw(e, 1)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 2)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 3)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 4)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 5)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 6)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 7)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 8)}></div>
            <div  style={style}
                onClick={(e) => draw(e, 9)}></div>                
      </div>                      
    </div>
  );
}

export default App;
