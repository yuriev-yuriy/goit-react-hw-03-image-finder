import axios from 'axios';

const key = '18694203-d22239baec913b213273a87a8';
const baseUrl = 'https://pixabay.com/api/';

const fetchPic = async (query, page = 1) => {
  const response = await axios.get(
    `${baseUrl}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  console.log(response.data);
  return response.data;
};

export default fetchPic;
