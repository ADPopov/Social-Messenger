import React from "react";
import Wall from "./Wall";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export default connect(mapStateToProps, {
  addPost,
})(Wall);
