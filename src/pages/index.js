import React from "react";
import { Routes, Route } from "react-router-dom";
import { Game } from "./Game";
import { GameWinner } from "./GameWinner";
import { Grid } from "./Grid";
import { PlayerForm } from "./PlayerForm";

export const Pages = () => {
  return (
    <Routes>
      <Route exact path="/xoxo-game-react" element={<Game />}></Route>
      <Route exact path="/PlayerForm" element={<PlayerForm />}></Route>
      <Route exact path="/XOXO" element={<Grid />}></Route>
      <Route exact path="/GameWinner" element={<GameWinner />}></Route>
    </Routes>
  );
};
