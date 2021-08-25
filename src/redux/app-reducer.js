import { getAuthUserData } from "./auth-reducer";

const INITIALIZE = "INITIALIZE";

let initialState = {
  isInitialize: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialize: true,
      };
    default:
      return state;
  }
};

export const initializing = () => ({
  type: INITIALIZE,
});

export const initializeApp = () => {
  return (dispatch) => {
    let result = dispatch(getAuthUserData());
    Promise.all([result]).then(() => {
      dispatch(initializing());
    });
  };
};

export default appReducer;
