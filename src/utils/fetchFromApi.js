import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "2668b924e9mshdd52593419b8e5ep10387bjsn00d40abe5598",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const fetchFromApi = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/${query}`, options);
  return data;
};
