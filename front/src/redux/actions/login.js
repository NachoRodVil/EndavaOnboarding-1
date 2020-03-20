import Axios from "axios";
import { USER_LOGIN, USER_LOGOUT } from "../constants";

const userLogin = (user) => ({
  type: USER_LOGIN,
  user
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

export const login = (user) => (dispatch) => {
  return Axios.post("api/user/login", user)
    .then(data => data.data)
    .then((data) => { dispatch(userLogin(data)) })
    .catch(error => { throw new Error(error) })
}

export const logout = () => {
  return function (dispatch, getstate) {
    return Axios.post("api/user/logout")
      .then(res => { dispatch(userLogout()) })
  }
}