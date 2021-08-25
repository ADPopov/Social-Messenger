import React from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hok/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = !this.props.match.params.userID
      ? this.props.id
      : this.props.match.params.userID;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
