import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  user: null,
};

const userInfoSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem('userInfo')) ?? initialState,
  name: 'userInfo',
  reducers: {
    setUserInfo: (state, action) => {
      const responseLogin = action.payload;
      const newState = { ...state, ...responseLogin };
      localStorage.setItem('userInfo', JSON.stringify(newState));
      return newState;
    },
    logout: (state) => {
      const newState = { ...state, ...initialState };
      localStorage.setItem('userInfo', JSON.stringify(newState));
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
