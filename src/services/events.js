import { api } from '../api';

export const getAllEvents = async () => {
  try {
    const { data } = await api.get('/events.json');
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: error.message || '' }
  }
}