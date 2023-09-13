import { useEffect } from "react";
import { useData } from "../../utils/DataProvider";
import { Grid } from "../../pages/Grid";
// import { getDatabase, ref, set } from "firebase/database";

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

export function GameLogics() {
  const {
    playingMode,
    playingAs,
    room: { data, turn, winner },
    setGameData,
    setTurn,
    setWinner,
  } = useData();

  console.log({ playingAs });
  async function SettingData(Index, DataValue = "O") {
    const updatedData = [...data];
    updatedData[Index] = DataValue;
    await setTimeout(
      () => setGameData(updatedData),
      playingMode === "singlePlayer" && turn === "O" ? 400 : 0
    ).then(setTurn(DataValue === "X" ? "O" : "X"));
  }

  const handleOnClick = (_, index) => {
    if (data[index] === "" && turn === playingAs) {
      console.log("turn:" + turn);
      SettingData(index, playingAs);
    }
  };

  useEffect(() => {
    if (playingMode === "singlePlayer") {
      for (let i in possibilities) {
        if (
          (possibilities[i].filter((value) => data[value] === "X").length ===
            2 &&
            possibilities[i].filter((value) => data[value] === "").length ===
              1 &&
            turn === "O") ||
          (possibilities[i].filter((value) => data[value] === "O").length ===
            2 &&
            possibilities[i].filter((value) => data[value] === "").length ===
              1 &&
            turn === "O")
        ) {
          for (let j in possibilities[i]) {
            if (data[possibilities[i][j]] === "") {
              SettingData(possibilities[i][j]);
              return;
            }
          }
          return;
        }
      }
    }

    if (data.filter((value) => value === "").length === 0 && turn === "O") {
      setWinner("Game is TIE");
    } else if (turn === "O" && playingMode === "singlePlayer") {
      if (data[4] === "") {
        SettingData(4);
      } else {
        for (let i in data) {
          if (data[i] === "") {
            SettingData(i);
            return;
          }
        }
      }
    }
    // ********************Winnig Check***********************
    for (let i = 0; i < possibilities.length; i++) {
      let [a, b, c] = possibilities[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        console.log("WINNER:", data[a]);
        setWinner([a, b, c]);
        // `Winner: ${data[a]}`
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="top-level-container">
      <Grid handleOnClick={handleOnClick} data={data} winner={winner} />
    </div>
  );
}
