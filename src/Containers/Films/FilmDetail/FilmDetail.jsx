
import React, {useState, useEffect} from 'react';
import "./FilmDetail.scss";
import { useSelector } from "react-redux";
import { filmData } from "../filmSlice";
import { userData } from "../../User/userSlice";
 
const FilmDetail = () => {

    const selectedFilm = useSelector(filmData);
    const credentials = useSelector(userData);

    if(selectedFilm?.id !== undefined){

        return (
            <div className="filmDetailDesign">
                {selectedFilm?.title}
                
                {credentials?.token !== '' &&

                    <div>Alquilame</div>
                
                }
                
            </div>
        )

    } else {
        return (
            <div className=''>Ha habido un error</div>
        )
    }

     
}
export default FilmDetail;