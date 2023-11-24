import axios from "axios";

/** base URL to make requests to the movie database */

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// const api = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//     // other configuration options if needed
//   });
// instance.get('/foo-bar') => https://api.themoviedb.org/3/foo-bar

export default instance;