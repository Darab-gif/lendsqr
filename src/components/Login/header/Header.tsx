import React from "react";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./header.scss";
const Header = () => {
  return (
    <div className="header_wrapper">
      <figure>
        <img src="./assets/logo.png" alt="logo" />
      </figure>
      <div className="search_box">
        <input type="text" placeholder="Search for anything" />
        <span>
          <BsSearch />
        </span>
      </div>
      <div className="profile_box">
        <p className="text">Docs</p>
        <span>
          <IoMdNotificationsOutline size={30} />{" "}
        </span>
        <div className="profile">
          <img src="./assets/avatar.png" alt="avatar" className="avatar" />
          <p>Adedeji</p>
          <span>
            <BsCaretDownFill />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
