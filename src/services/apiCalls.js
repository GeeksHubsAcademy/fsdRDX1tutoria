
import axios from 'axios';

export const loginUser = async () => {

    // //axios call
    // let res = await axios.get("https://rickandmortyapi.com/api/character");

    // // return res;
    // return res.data.results;
};


export const bringMovies = async () => {

    let res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

    return res.data.results;
};