import {instance} from '../utils/api';


export const getCartByUserId = async (config = {}) => {
  try {
    const response = await instance.get(`/api/v1/carts/${config.userId}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching carts', error);
  }
}

export const createCartItem = async (data = {}) => {
  try {
    const response = await instance.post(`/api/v1/carts`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating cart item', error);
  }
}

export const deleteCartItem = async (config = {}) => {
  try {
    const response = await instance.delete(`/api/v1/carts/${config.id}`);
    return response.data;
  } catch (error) {
    console.error('Error creating cart item', error);
  }
}

export const updateCartItem = async (data) => {
  try {
    const id = data.id;
    delete data.id;

    const response = await instance.patch(`/api/v1/carts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating cart item', error);
  }
}