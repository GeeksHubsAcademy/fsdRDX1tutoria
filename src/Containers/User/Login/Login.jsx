
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "../userSlice";
import { loginUser } from "../../../services/apiCalls";

import "./Login.scss";


const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userReduxCredentials = useSelector(userData);

    //Hooks

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //Handlers

    const inputHandler = (e) => {
        //console.log(e.target.value);

        //Aqui setearemos DINÁMICAMENTE el BINDEO entre inputs y hook.
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));


    }

    //Life-cycle methods

    useEffect(() => {

        if (userReduxCredentials?.token !== '') {
            navigate("/");
        };
    }, []);

    const logMe = () => {
        
        //Empieza el proceso de login.....
        // loginUser(user)
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error);

        //Hardcodeamos un token fingiendo que el backend nos ha devuelto el susodicho
        let fakeHardToken = 'wololo';

        dispatch(login({token: fakeHardToken}));

        setTimeout(()=>{
            navigate("/");
        },1000);

    };


    return (
        <div className='loginDesign'>

            <div className="inputsContainer">
                <input type="text" name="email" placeholder="email" onChange={(e) => inputHandler(e)} />
                <input type="password" name="password" placeholder="password" onChange={(e) => inputHandler(e)} />
            </div>
            <div onClick={() => logMe()} className="buttonDesign">
                Login me!
            </div>

        </div>
    )
}
export default Login;