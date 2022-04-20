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
