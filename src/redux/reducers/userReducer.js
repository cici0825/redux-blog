import { createSlice } from "@reduxjs/toolkit";
import { getAuthToken, setAuthToken } from "../../utils";
import {
  getMe as getMeAPI,
  login as loginAPI,
  register as registerAPI,
} from "../../WebAPI";

export const UserReducer = createSlice({
  name: "users",
  initialState: {
    user: null,
    isLoadingUser: false,
    errMessage: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoadingUser: (state, action) => {
      state.isLoadingUser = action.payload;
    },
    setErrMessage: (state, action) => {
      state.errMessage = action.payload;
    },
  },
});

export const { setIsLoadingUser, setUser, setErrMessage } = UserReducer.actions;

export const getMe = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  if (getAuthToken()) {
    getMeAPI().then((response) => {
      console.log(response);
      if (response.ok === 1) {
        dispatch(setUser(response.data));
        dispatch(setIsLoadingUser(false));
        return true;
      }
      setAuthToken(null);
      dispatch(setErrMessage(response.message));
    });
  }
  dispatch(setIsLoadingUser(false));
  return false;
};

export const logout = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  setAuthToken("");
  dispatch(setUser(null));
  dispatch(setIsLoadingUser(false));
};

export const login = (username, password) => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  dispatch(setErrMessage(""));
  return loginAPI(username, password).then((data) => {
    if (!data.ok) {
      dispatch(setIsLoadingUser(false));
      dispatch(setErrMessage(data.message));
      return false;
    }
    setAuthToken(data.token);
    dispatch(setIsLoadingUser(false));
    return true;
  });
};

export const register = (username, password, nickname) => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  dispatch(setErrMessage(""));
  return registerAPI(username, password, nickname).then(async (res) => {
    if (res.ok !== 1) {
      dispatch(setErrMessage(res.message));
      dispatch(setIsLoadingUser(false));
      return false;
    }
    // 註冊成功 -> 將 token 存入 local storage
    setAuthToken(res.token);
    dispatch(setIsLoadingUser(false));
    return true;
  });
};

export default UserReducer.reducer;
