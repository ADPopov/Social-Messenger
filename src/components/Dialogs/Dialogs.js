import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialogs/Dialogs";
import Message from "./Messages/Messages";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormControls";

const maxLength100 = maxLengthCreator(100);

function AddMessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"messageBody"}
          placeholder="Write a message..."
          component={Textarea}
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button type={"submit"}>Send</button>
      </div>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({
  form: "message",
})(AddMessageForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} key={d.id} id={d.id}></Dialog>
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id}></Message>
  ));

  console.log(props);

  const sendMessage = (values) => {
    console.log();
    props.addMessageCreator(values.messageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>
        {messagesElements}
        <div>
          <AddMessageReduxForm onSubmit={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
