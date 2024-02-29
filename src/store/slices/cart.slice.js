import { createSlice } from "@reduxjs/toolkit";
import getToken from "../../utils/getToken";
import axios from "axios";
const urlBase = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (currentValue, action) => [...currentValue, action.payload],
    deleteFromCart: (currentValue, action) => {
      return currentValue.filter((prod) => prod.id !== action.payload);
    },
    updateCart: (currentValue, action) => {
      const { id, quantity } = action.payload;
      currentValue.map((prod) =>
        prod.id === id ? (prod.quantity = quantity) : prod
      );
    },
    setCart: (currentValue, action) => action.payload,
  },
});

export const { addToCart, deleteFromCart, updateCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
  axios
    .get(urlBase, getToken())
    .then((res) => dispatch(setCart(res.data)))
    .catch((err) => console.log(err));
};

export const postCartThunk = (data) => (dispatch) => {
  axios
    .post(urlBase, data, getToken())
    .then((res) => dispatch(addToCart(res.data)))
    .catch((err) => console.log(err));
};

export const deleteCartThunk = (id) => (dispatch) => {
  const url = `${urlBase}/${id}`;
  axios
    .delete(url, getToken())
    .then((res) => {
      console.log("el elemento se borro", res.data);
      dispatch(deleteFromCart(id));
    })
    .catch((err) => console.log(err));
};

export const updateCartThunk = (prod, quantity) => (dispatch) => {
  const data = {
    quantity: prod.quantity + quantity,
  };
  const url = `${urlBase}/${prod.id}`;
  axios
    .put(url, data, getToken())
    .then((res) => dispatch(updateCart(res.data)))
    .catch((err) => console.log(err));
};
