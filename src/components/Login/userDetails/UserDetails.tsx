import React from "react";
import { userDetail } from "../../../data/data";
import "./userDetails.scss";

const UserDetails = () => {
  const renderDetails = userDetail.map((item: any) => (
    <div className="user_container">
      <span>{item.icon}</span>
      <h1>{item.info}</h1>
      <p>{item.number}</p>
    </div>
  ));
  return <div className="user_wrapper">{renderDetails}</div>;
};

export default UserDetails;
