import { SET_PRODUCT, SET_CART, ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from './constants';


export const setProducts = function(data) {
  return {
    payload: data,
    type: SET_PRODUCT
  }
}
export const setCarts = function(data) {
  return {
    payload: data,
    type: SET_CART
  }
}

export const addToCart = function(data) {
  return {
    payload: data,
    type: ADD_TO_CART
  }
}

export const removeFromCart = function(data) {
  return {
    payload: data,
    type: REMOVE_FROM_CART
  }
}

export const increaseQuantity = function(data) {
  return {
    payload: data,
    type: INCREMENT_QUANTITY,
  }
}

export const decreaseQuantity = function(data) {
  return {
    payload: data,
    type: DECREMENT_QUANTITY,
  }
}