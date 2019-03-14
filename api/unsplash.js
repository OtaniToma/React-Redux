import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID e39bebfab4192b093b0271a62b50aa4166da005e8afb3ee3d983218f794f3aa0'
}
});