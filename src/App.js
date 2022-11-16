
import './App.css';

//Lib imports

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Component-container imports

import Home from './Containers/Home/Home';
import Login from './Containers/User/Login/Login';
import Header from './Components/Header/Header';
import Register from './Containers/User/Register/Register';
import Profile from './Containers/User/Profile/Profile';
import FilmDetail from './Containers/Films/FilmDetail/FilmDetail';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        {/* En la parte superior, de forma fija, tendremos el Header */}
        <Header/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/filmdetail" element={<FilmDetail/>}/>

        </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
