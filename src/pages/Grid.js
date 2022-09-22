import { GameWinner } from "./GameWinner";
import { useData } from "../utils/DataProvider";

export function Grid(props) {
  const {
    room: { player1, player2 },
  } = useData();
  return (
    <>
      {!props.containerStyle && (
        <>
          <div className="show-player-x">{player1}</div>
          <div className="show-player-o">{player2}</div>
        </>
      )}
      {props.winner === "" || props.containerStyle ? (
        <div className="grid-container" style={props.containerStyle}>
          {new Array(9).fill("").map((_, index) => (
            <div
              key={`cell-${index}`}
              className="grid-cell"
              onClick={(e) => props.handleOnClick(e, index)}
              style={props.cellStyle}
            >
              <div
                id={
                  index === props.winner[0] ||
                  index === props.winner[1] ||
                  index === props.winner[2]
                    ? "strike"
                    : null
                }
              >
                {props.data[index]}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <GameWinner />
      )}
    </>
  );
}
