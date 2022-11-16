
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { bringMovies } from '../../services/apiCalls';
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../Containers/User/userSlice";
import { filmData, addFilm } from "../../Containers/Films/filmSlice";

import "./Home.scss";

const Home = () => {

    const reduxCharacters = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Hooks

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log("evil", reduxCharacters);


        if (movies.length === 0) {

            bringMovies()
                .then(movies => {

                    setMovies(movies)

                })
                .catch(error => console.log(error))

        }

    }, []);

    const clickedMovie = (movie) => {

        //Guardo la película seleccionada en redux.

        dispatch(addFilm({...movie,details: movie}));

        setTimeout(()=>{
            navigate("/filmdetail");
        },750);
    }

    if (movies.length === 0) {

        return (
            <div className='homeDesign'>soy Home</div>
        )

    } else {

        //Mapeamos las películas por defecto

        return (
            <div>

                {

                    movies.map(
                        movie => {
                            return (
                                <div onClick={()=>clickedMovie(movie)} key={movie.id} className="movieShow">
                                    <img className="moviePic" src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} />
                                </div>
                            )
                        }
                    )
                }

            </div>
        )



    }


}
export default Home;