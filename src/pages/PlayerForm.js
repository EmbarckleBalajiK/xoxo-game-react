import React from 'react';
import { useData } from '../utils/DataProvider';

export const PlayerForm = () => {
    const { playerName, setPlayerName, onPlayerSubmit } = useData()

    return <form onSubmit={onPlayerSubmit}> <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} /> <button type="submit">Enter your Name</button></form>
}
