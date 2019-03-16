import axios from 'axios';

const KEY = 'AIzaSyC-wjTiniNEukusUzoYq1jUqvmfzyfWmY8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
