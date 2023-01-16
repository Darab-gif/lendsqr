import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { postId } = useParams();

  const info = useSelector((state: any) =>
    state.sub.find((item: any) => item.id === postId)
  );

  const userInfo = (
    <div key={info.id}>
      <h1>Personal Information</h1>
      <div>
        <div>
          <h1>Full Name</h1>
          <p>{info.profile.firstName}</p>
          <p>{info.profile.lastName}</p>
        </div>
        <div>
          <h1>Phone Number</h1>
          <p>{info.profile.phoneNumber}</p>
        </div>
        <div>
          <h1>Email Address</h1>
          <p>{info.email}</p>
        </div>
        <div>
          <h1>BVN</h1>
          <p>{info.profile.bvn}</p>
        </div>
        <div>
          <h1>Gender</h1>
          <p>{info.profile.gender}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div>{userInfo}</div>
    </div>
  );
};

export default UserInfo;
