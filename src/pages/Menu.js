import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../utils/DataProvider";

export const Menu = () => {
  const { setPlayingMode } = useData();
  const navigate = useNavigate();

  const menuList = [
    {
      name: "singlePlayer",
      label: "Single-Player",
    },
    {
      name: "duoPlayer",
      label: "Duo-Player",
    },
    {
      name: "multiPlayer",
      label: "Multi-Player",
    },
  ];

  const handleOnMenuClick = (mode) => {
    setPlayingMode(mode);
    navigate("/game");
  };

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {menuList.map((menuItem, menuItemIndex) => (
          <li
            className="glow-on-hover"
            onClick={() => handleOnMenuClick(menuItem.name)}
            key={menuItemIndex}
          >
            {menuItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
