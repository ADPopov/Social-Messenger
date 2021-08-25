import React from "react";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hok/withAuthRedirect";
import { compose } from "redux";
import { addMessageCreator } from "../../redux/dialog-reducer";

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessageCreator }),
  withAuthRedirect
)(DialogsContainer);
