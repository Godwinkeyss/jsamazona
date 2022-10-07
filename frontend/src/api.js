/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { apiUrl } from './config';
import axios from 'axios';

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
      method: 'GET',
      'Content-Type': 'applicaton/json',
    });
    if(response.statusText !== 'OK'){
        throw new Error(response.data.message)
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return {error: err.response.data.message || err.message};
  }
};
