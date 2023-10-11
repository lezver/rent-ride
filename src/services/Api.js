import axios from 'axios';

const BASE_URL = 'https://65213eb8a4199548356cf568.mockapi.io';

export const getCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cars`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
