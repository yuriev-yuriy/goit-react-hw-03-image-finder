const key = '18694203-d22239baec913b213273a87a8';
const baseUrl = 'https://pixabay.com/api/';

const fetchPic = (query, page = 1) => {
  return fetch(
    `${baseUrl}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error(`Нет картинок по запросу ${query}`));
    })
    .catch(error => this.state({ error, status: 'rejected' }));
};

export default fetchPic;
