import { configureStore } from '@reduxjs/toolkit';
import userInfo from './slice/userInfo.slice';
import cart from './slice/cart.slice';

export default configureStore({
  reducer: {
    //aqui es donde agregamos nuestros estado globales
    userInfo,
    cart,
  },
});
