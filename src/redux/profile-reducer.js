import { profileAPI } from "../api/profileAPI";

const ADD_POST = "ADD_POST";
const LOAD_USER_PROFILE = "LOAD_USER_PROFILE";
const CLEAR_STATE = "CLEAR_STATE";
const SET_STATUS = "LOAD_STATUS";

const initialState = {
  posts: [
    {
      id: 1,
      name: "Alexander Popov",
      content: "I like Beatles",
      likes_count: 10,
    },
    {
      id: 2,
      name: "Stanislav Volozhanin",
      content: "Ooh... Very good job!",
      likes_count: 15,
    },
  ],
  profile: null,
  newPostText: "",
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1,
        name: "Alexander Popov",
        content: action.postBody,
        likes_count: 10,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case LOAD_USER_PROFILE:
      return {
        ...state,
        profile: action.userProfile,
      };
    case CLEAR_STATE:
      return {
        ...state,
        profile: null,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.statusText,
      };
    default:
      return state;
  }
};

export const addPost = (postBody) => ({ type: ADD_POST, postBody });
export const loadUserProfile = (userProfile) => ({
  type: LOAD_USER_PROFILE,
  userProfile,
});
export const setStatus = (statusText) => ({
  type: SET_STATUS,
  statusText,
});

export const getUserProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userID).then((response) => {
      dispatch(loadUserProfile(response.data));
    });
  };
};
export const getUserStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateUserStatus = (statusText) => {
  return (dispatch) => {
    profileAPI.updateStatus(statusText).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(statusText));
      }
    });
  };
};

export default profileReducer;
