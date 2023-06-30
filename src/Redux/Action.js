import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (error) => {
  return {
    type: FAIL_REQUEST,
    payload: error,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

//get user function
export const fetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("http://localhost:8000/user")
      .then((response) => {
        const userlist = response.data;
        console.log(userlist);
        dispatch(getUserList(userlist));
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

//add user function
export const addUserFunction = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("http://localhost:8000/user", data)
      .then((response) => {
        dispatch(addUser());
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

// update user function
export const updateUserFunction = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put(`http://localhost:8000/user/${code}`, data)
      .then((response) => {
        dispatch(updateUser());
        dispatch(fetchUserList());
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

//remove user function
export const removeUser = (code) => {
  return (dispatch) => {
    dispatch(deleteUser());
    axios
      .delete("http://localhost:8000/user/" + code)
      .then((response) => {
        dispatch(deleteUser());
        dispatch(fetchUserList());
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

//get user object by id

export const fetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("http://localhost:8000/user/" + code)
      .then((response) => {
        const userlist = response.data;

        dispatch(getUserObj(userlist));
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};
