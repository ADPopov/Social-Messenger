import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Alexander" },
        { id: 2, name: "Daniil" },
        { id: 3, name: "Stas" },
        { id: 4, name: "Misha" },
        { id: 5, name: "Dima" },
      ],
      messages: [
        { id: 1, message: "Hell" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "So good" },
      ],
      newMessageBody: "",
    },
    profilePage: {
      posts: [
        {
          id: 1,
          name: "Billy Herrington",
          content: 'I like Doras song - "WturilAss". Its great!',
          likes_count: 10,
        },
        {
          id: 2,
          name: "Stanislav Volozhanin",
          content: "Hoh... I watch gachi clips. Thanks for the good content!",
          likes_count: 15,
        },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
