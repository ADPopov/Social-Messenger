import React from "react";
import s from "./Users.module.css";
import userPhotoDefault from "../../assets/img/userPhotoDefault.png";
import Loader from "../common/Loader/Loader";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let currentPage = props.currentPage;

  return (
    <div>
      {props.isFetching ? <Loader /> : undefined}
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.currentPageChange(p);
              }}
              className={currentPage === p ? s.currentPage : undefined}
              key={p}
            >
              {" "}
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={s.userRow}>
          <Link to={`/profile/${user.id}`}>
            <img
              alt={"user avatar"}
              className={s.photo}
              src={
                user.photos.small === null
                  ? userPhotoDefault
                  : user.photos.small
              }
            />
          </Link>
          <div className={s.userInfoBox}>
            <div className={s.userField_Title}>{user.name}</div>
            <div className={s.userField_Status}>{user.status}</div>
            <div className={s.userField_location}>
              <div>{/*user.location.city*/}</div>
              <div>{/*user.location.country*/}</div>
            </div>

            <div className={s.button_follow}>
              {props.isAuth ? (
                <button
                  disabled={props.isFollowingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    user.followed
                      ? props.setUnfollow(user.id)
                      : props.setFollow(user.id);
                  }}
                >
                  {user.followed ? "Unfollow" : "Follow"}
                </button>
              ) : undefined}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
