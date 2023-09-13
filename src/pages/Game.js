import React from "react";
import { GameLogics } from "../components/Grid/GameLogics";
import { useData } from "../utils/DataProvider";
import { PlayerForm } from "./PlayerForm";
// import { getDatabase, ref, set } from "firebase/database";

export function Game() {
  const { room } = useData();
  console.log({ room });
  return room ? <GameLogics /> : <PlayerForm />;
}
