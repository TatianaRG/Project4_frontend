import axios from 'axios';

const baseUrl = 'https://myrewearapp.herokuapp.com';

export const getNewness = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/products/new_in/`,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getProducts = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/products/`,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getCategories = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/categories/`,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getSingleProduct = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/products/${id}`,
  };
  const { data } = await axios.request(options);
  return data;
};
