import axios from 'axios';
const KEY = 'AIzaSyBOQzN7uO1o-14hr_td6VrNCPS6yM-PlEE';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'id',
        maxResults: 50,
        key: KEY
    }
})