import { configureStore } from '@reduxjs/toolkit';
import userInfo from './slice/userInfo.slice';

export default configureStore({
  reducer: {
    //aqui es donde agregamos nuestros estado globales
    userInfo,
  },
});
