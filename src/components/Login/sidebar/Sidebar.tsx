import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./sidebar.scss";

const Sidebar = () => {
  const side = useSelector((state: any) => state.side);
  console.log(side);
  const renderSide = side.map((val: any, index: any) => (
    <div className="siderender_box" key={index}>
      <p>{val.title}</p>
      {val.link.map((item: any) => (
        <div>
          <span className="icon">{item.icon}</span>
          <span className="name">{item.name}</span>
        </div>
      ))}
    </div>
  ));
  return (
    <div className="sidebar_container">
      <div className="sidebar_box">
        <h2 className="text">
          <span></span>Switch Organization <span></span>
        </h2>
        <p className="dash">
          <span></span> Dashboard
        </p>
      </div>
      <div>{renderSide}</div>
    </div>
  );
};

export default Sidebar;
