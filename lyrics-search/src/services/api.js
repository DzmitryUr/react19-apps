import axios from 'axios';

const URL = 'https://api.lyrics.ovh/v1';

export const searchLyrics = async (artist, song) => {
  if (!artist === '' || song === '') {
    return;
  }

  try {
    const response = await axios.get(`${URL}/${artist}/${song}`);
    console.log(response);

    return { success: true, lyrics: response.data.lyrics };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};
