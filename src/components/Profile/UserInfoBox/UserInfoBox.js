import React from "react";
import s from "./UserInfoBox.module.css";
import Loader from "../../common/Loader/Loader";
import userPhotoDefault from "../../../assets/img/userPhotoDefault.png";
import StatusBoxHook from "./StatusBoxHook";
import StatusBox from "./StatusBox";

const UserInfoBox = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <div className={s.userInfo_box}>
        <div className={s.userPhoto_wrap}>
          <img
            alt={"Face user"}
            src={
              !props.profile.photos.large
                ? userPhotoDefault
                : props.profile.photos.large
            }
          />
        </div>
        <div className={s.userName_wrap}>
          <p>{props.profile.fullName}</p>
        </div>
      </div>
      <StatusBoxHook
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
    </div>
  );
};

export default UserInfoBox;
