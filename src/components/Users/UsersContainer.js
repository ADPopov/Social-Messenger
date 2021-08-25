import React from "react";
import { connect } from "react-redux";
import {
  getCurrentPage,
  getIsAuth,
  getIsFetching,
  getIsFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersSelector,
  queryUsers,
  setCurrentPage,
  setFollow,
  setFollowingInProgress,
  setUnfollow,
  setUserUnfollowing,
} from "../../redux/users-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../../hok/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.queryUsers(this.props.currentPage, this.props.pageSize);
  }

  componentWillUnmount() {}

  currentPageChange = (currentPageNumber) => {
    this.props.setCurrentPage(currentPageNumber);
    this.props.queryUsers(currentPageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPageChange={this.currentPageChange}
        isFetching={this.props.isFetching}
        isFollowingInProgress={this.props.isFollowingInProgress}
        setUnfollow={this.props.setUnfollow}
        setFollow={this.props.setFollow}
        isAuth={this.props.isAuth}
      />
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     currentPage: state.usersPage.currentPage,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     pageSize: state.usersPage.pageSize,
//     isFetching: state.usersPage.isFetching,
//     isFollowingInProgress: state.usersPage.isFollowingInProgress,
//     isAuth: state.auth.isAuth,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setFollow,
    setUnfollow,
    setUserUnfollowing,
    setCurrentPage,
    setFollowingInProgress,
    queryUsers,
  }),
  withAuthRedirect
)(UsersContainer);
