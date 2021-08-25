import React from "react";
import Cover from "./Cover/Cover";
import UserInfoBox from "./UserInfoBox/UserInfoBox";
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {
  return (
    <div>
      <Cover />
      <UserInfoBox {...props} />
      <WallContainer />
    </div>
  );
};

export default Profile;
