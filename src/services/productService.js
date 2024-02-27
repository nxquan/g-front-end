import {instance} from '../utils/api';


export const getAllProducts = async (config = {}) => {
  try {
    const response = await instance.get('/api/v1/products', config);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
  }
}