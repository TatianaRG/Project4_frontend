// const devUrl = '/api';
const devUrl = 'https://myrewearapp.herokuapp.com';
const prodUrl = process.env.REACT_APP_PROD_URL;
export const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
