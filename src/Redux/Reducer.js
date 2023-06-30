import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

const initialState = {
  loading: true,
  userList: [],
  userObject: {},
  errMessage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
      };

    case GET_USER_LIST:
      return {
        loading: false,
        errMessage: "",
        userList: action.payload,
        userObject: {},
      };

    case ADD_USER:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };  

    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };

      case GET_USER_OBJ:{
        return {
          ...state,
          loading: false,
          userObject: action.payload,
        };
      }

    default:
      return state;
  }
};
