
import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { userData, userout } from "../../Containers/User/userSlice";
import { addSearch } from "../../Containers/Films/filmSlice";
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../services/apiCalls';


const Header = () => {

    //Hooks

    const [criteria, setCriteria] = useState('');

    const navigate = useNavigate();
    const userReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

    //Handlers

    const criteriaHandler = (e) => {

        setCriteria(e.target.value);
    }

    //Funciones

    const logout = () => {

        //aqui borraremos el token y haremos log out :)
        dispatch(userout({ credentials: {} }))

        //inmediatamente despues del logout, conduzco al usuario a home.
        return navigate("/");

    }

    //Life-cycle functions

    useEffect(()=>{
        
        if(criteria !== ''){
            //llamamos a la función de búsqueda....

            searchMovies(criteria)
                .then(result => {
                    console.log("que ha pasado???? ",result);

                    //Ahora que tengo las películas...las guardo en redux....
                    dispatch(addSearch({search: result}))
                })
                .catch(error => console.log((error)));
        }
    },[criteria]);

    if (userReduxCredentials?.credentials?.token !== undefined) {
        //Esta comparativa viene a decirnos que SI tenemos un token

        return (
            <div className='headerDesign'>
                <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} />
                <div onClick={() => navigate("/profile")} className="linkDesign">{userReduxCredentials?.credentials?.name}</div>
                <div onClick={() => navigate("/")} className="linkDesign">Home</div>
                <div onClick={() => logout()} className="linkDesign">logout</div>
            </div>
        )
    } else {
        //Ya que no tenemos un token, no estamos logeados, por lo tanto si damos opcion a logearnos o registrarnos

        return (
            <div className='headerDesign'>
                <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} />
                <div onClick={() => navigate("/login")} className="linkDesign">Login</div>
                <div onClick={() => navigate("/register")} className="linkDesign">Register</div>
            </div>
        )
    }


}
export default Header;