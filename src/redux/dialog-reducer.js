const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.message }],
      };
    default:
      return state;
  }
};

export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

export default dialogReducer;
