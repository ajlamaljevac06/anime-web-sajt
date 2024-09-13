import axios from 'axios';

const API_URL = 'https://kitsu.io/api/edge';

export const getAnimeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/anime/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    return null;
  }
};
