import axios from 'axios';

const API_URL = 'http://localhost:3001/ideas';

export const submitPrompt = async (prompt: string) => {
  const res = await axios.post(API_URL, { prompt });
  return res.data;
};

export const getIdea = async (id: string) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
