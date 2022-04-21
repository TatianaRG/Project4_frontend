import axios from 'axios';

const baseUrl = 'https://myrewearapp.herokuapp.com';

export const registerUser = async (user) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/authentication/register/`,
    data: user,
  };
  const { data } = await axios.request(options);
  return data;
};

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/authentication/login/`,
    data: credentials,
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  console.log('login data', data);
  return data;
};
