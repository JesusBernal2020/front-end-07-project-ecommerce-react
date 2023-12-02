import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  user: null,
};

const userInfoSlice = createSlice({
  initialState,
  name: 'userInfo',
  reducers: {
    setUserInfo: (state, action) => {
      const responseLogin = action.payload;
      const newState = { ...state, ...responseLogin };
      return newState;
    },
    logout: (state) => {
      const newState = { ...state, ...initialState };
      return newState;
    },
  },
});

export const { setUserInfo, logout } = userInfoSlice.actions;

export const loginUser = (dataForm) => (dispatch) => {
  const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';

  axios
    .post(URL, dataForm)
    .then(({ data }) => dispatch(setUserInfo(data)))
    .catch((err) => console.log(err));
};

export default userInfoSlice.reducer;
