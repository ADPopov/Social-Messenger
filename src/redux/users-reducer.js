import { userAPI } from "../api/userAPI";
import { createSelector } from "reselect";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_PROGRESS_FOLLOWING = "TOGGLE_PROGRESS_FOLLOWING";

let initState = {
  users: [],
  totalUsersCount: 5,
  pageSize: 30,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPageNumber,
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_PROGRESS_FOLLOWING:
      return {
        ...state,
        isFollowingInProgress: action.isProgress
          ? [...state.isFollowingInProgress, action.userID]
          : state.isFollowingInProgress.filter((id) => id !== action.userID),
      };

    default:
      return state;
  }
};

export const setUserFollowing = (userID) => ({ type: FOLLOW, id: userID });
export const setUserUnfollowing = (userID) => ({ type: UNFOLLOW, id: userID });
export const loadUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPageNumber) => ({
  type: SET_CURRENT_PAGE,
  currentPageNumber,
});
export const setUsersTotalCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});
export const setFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const setFollowingInProgress = (isProgress, userID) => ({
  type: TOGGLE_PROGRESS_FOLLOWING,
  isProgress,
  userID,
});

export const queryUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(loadUsers(response.data.items));
      dispatch(setUsersTotalCount(response.data.totalCount));
      dispatch(setFetching(false));
    });
  };
};

export const setUnfollow = (userID) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userID));
    userAPI.setUnfollow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserUnfollowing(userID));
        dispatch(setFollowingInProgress(false, userID));
      }
    });
  };
};

export const setFollow = (userID) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userID));
    userAPI.setFollow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setFollowingInProgress(false, userID));
        dispatch(setUserFollowing(userID));
      }
    });
  };
};

/*Selectors users*/

export const getUsers = (state) => {
  return state.users.users;
};

export const getCurrentPage = (state) => {
  return state.users.currentPage;
};

export const getTotalUsersCount = (state) => {
  return state.users.totalUsersCount;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state) => {
  return state.users.pageSize;
};

export const getIsFetching = (state) => {
  return state.users.isFetching;
};

export const getIsFollowingInProgress = (state) => {
  return state.users.isFollowingInProgress;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export default usersReducer;
