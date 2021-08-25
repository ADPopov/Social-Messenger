import React from "react";
import s from "./Wall.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className={s.submit_block_content}>
      <Field
        name={"newPostBody"}
        placeholder="Write your post..."
        component={Textarea}
        validate={[required, maxLength30]}
      />
      <div>
        <button>New post</button>
      </div>
    </form>
  );
}

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddNewPostForm);

const Wall = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      key={p.id}
      content={p.content}
      name={p.name}
      likes_count={p.likes_count}
    />
  ));

  const addNewPostSubmit = (value) => {
    props.addPost(value.newPostBody);
  };

  return (
    <div className={s.wall_content}>
      <AddPostReduxForm onSubmit={addNewPostSubmit} />
      {postsElements}
    </div>
  );
};

export default Wall;
