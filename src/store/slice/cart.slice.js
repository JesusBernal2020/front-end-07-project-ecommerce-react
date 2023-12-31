import { createSlice } from '@reduxjs/toolkit';
import { axiosEcommerce, getConfig } from '../../utils/configAxios';

const initialState = {
  products: [],
  isShowCart: false,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    changeIsShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },

    setProducts: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
    },
  },
});

export const { changeIsShowCart, setProducts } = cartSlice.actions;

export const getCartProducts = () => (dispatch) => {
  axiosEcommerce
    .get('/cart', getConfig())
    .then(({ data }) => dispatch(setProducts(data)))
    .catch((err) => console.log(err));
};

export const addProductCart = (data) => (dispatch) => {
  axiosEcommerce
    .post('/cart', data, getConfig())
    .then(({ data }) => dispatch(getCartProducts(data)))
    .catch((err) => console.log(err));
};

export const deleteProductCart = (productId) => (dispatch) => {
  axiosEcommerce
    .delete(`cart/${productId}`, getConfig())
    .then(() => dispatch(getCartProducts()))
    .catch((err) => console.log(err));
};

export const checkoutCart = () => (dispatch) => {
  axiosEcommerce
    .post('/purchases', {}, getConfig())
    .then(() => dispatch(getCartProducts()))
    .catch((err) => console.log(err));
};

export default cartSlice.reducer;
