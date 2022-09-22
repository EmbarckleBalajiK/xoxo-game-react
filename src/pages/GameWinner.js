import { useData } from "../utils/DataProvider";
import { Grid } from "./Grid";

export function GameWinner() {
  const {
    room: { data, winner },
  } = useData();
  const containerStyle = {
    width: 200,
    height: 200,
    backgroundColor: "rgb(255, 165, 0, 0 )",
    margin: "auto",
  };
  const cellStyle = {
    background: "orange",
    fontSize: 44,
    color: "#333",
    margin: "auto",
    width: 55,
    height: 55,
  };

  return (
    <div className="grid-winner">
      Winner:{data[winner[0]]}
      <Grid
        data={data}
        containerStyle={containerStyle}
        cellStyle={cellStyle}
        winner={winner}
      />
    </div>
  );
}

// style={{width: 500,
//     height: 500,
//     display: "flex",
//     flexWrap: "wrap",
//     backgroundColor: "orange"}}
