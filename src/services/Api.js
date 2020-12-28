import axios from 'axios';

const key = '18694203-d22239baec913b213273a87a8';
const baseUrl = 'https://pixabay.com/api/';

// axios.defaults.baseUrl = baseUrl;
// axios.defaults.params = {
//   key: key,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// }

const fetchPic = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default fetchPic;
