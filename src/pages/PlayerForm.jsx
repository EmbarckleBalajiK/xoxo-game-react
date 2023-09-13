import React from "react";
import { useData } from "../utils/DataProvider";

export const PlayerForm = () => {
  const { playerName, setPlayerName, onStart } = useData();

  return (
    <form className="player-form" onSubmit={onStart}>
      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button className="glow-on-hover type=" type="submit">
        Enter your Name
      </button>
    </form>
  );
};
