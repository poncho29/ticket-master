import axios from 'axios';
const APIKEY = import.meta.env.VITE_APIKEY;

export const api = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2',
  timeout: 1000,
  headers: {},
  params: {apikey: APIKEY}
});