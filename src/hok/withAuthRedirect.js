import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { getAuthUserData } from "../redux/auth-reducer";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      } else {
        return <Component {...this.props} />;
      }
    }
  }

  let connectedRedirectComponent = connect(mapStateToProps, {
    getAuthUserData,
  })(RedirectComponent);

  return connectedRedirectComponent;
};
