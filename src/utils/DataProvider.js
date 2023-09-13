import React, { createContext, useContext, useRef, useState } from "react";
import { database } from "../components/Firebase";
import { v4 as uuid } from "uuid";

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = (props) => {
  const [playerName, setPlayerName] = useState("");
  const [playingMode, setPlayingMode] = useState("singlePlayer");
  const [roomLoading, setRoomLoading] = useState(false);
  const [room, setRoom] = useState(null);

  const [playingAs, setPlayingAs] = useState("X");

  const roomRef = useRef(null);

  const onStart = (e) => {
    e.preventDefault();

    if (playingMode === "multiPlayer") {
      console.log("onPlayerSubmit");
      setRoomLoading(true);
      database
        .ref("/rooms")
        .orderByChild("player2")
        .equalTo("")
        .limitToFirst(1)
        .once("value", (a) => {
          const existingRoom = a.val();
          if (existingRoom) {
            const existingRoomId = Object.keys(existingRoom)[0];
            roomRef.current = database.ref(`/rooms/${existingRoomId}`);

            roomRef.current.update({ player2: playerName }).then(() => {
              roomRef.current.on("value", (updated) => {
                setPlayingAs("O");
                setRoom(updated.val());
                setRoomLoading(false);
              });
            });
          } else {
            const roomId = uuid();
            roomRef.current = database.ref(`/rooms/${roomId}`);

            roomRef.current
              .set({
                player1: playerName,
                player2: "",
                turn: "X",
                data: Array(9).fill(""),
                winner: "",
              })
              .then(() => {
                roomRef.current.on("value", (updated) => {
                  setPlayingAs("X");
                  setRoom(updated.val());
                  setRoomLoading(false);
                });
              });
          }
        });
    } else {
      playingMode === "singlePlayer"
        ? setRoom({
            player1: playerName,
            player2: "Computer",
            turn: "X",
            data: Array(9).fill(""),
            winner: "",
          })
        : setRoom({
            player1: playerName,
            player2: "Computer",
            turn: "X",
            data: Array(9).fill(""),
            winner: "",
          });
    }

    return false;
  };

  const setRoomData = (roomData) => {
    playingMode === "multiPlayer"
      ? roomRef.current.update(roomData)
      : setRoom((prev) => ({
          ...prev,
          ...roomData,
        }));
  };

  const setGameData = (data) => {
    setRoomData({ data });
  };

  const setTurn = (turn) => {
    setRoomData({ turn });
  };

  const setWinner = (winner) => {
    setRoomData({ winner });
  };

  console.log({ playingAs, playerName, room });

  return (
    <DataContext.Provider
      value={{
        room,
        playingAs,
        playerName,
        setPlayerName,
        roomLoading,
        setRoomLoading,
        onStart,
        setGameData,
        setTurn,
        setWinner,
        playingMode,
        setPlayingMode,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
