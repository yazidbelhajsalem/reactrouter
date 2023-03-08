
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

import { useState } from 'react';
import Dashboard from './Page/Dashboard';
import MovieList from './Page/MovieList';
import AddMovie from './Page/AddMovie';
import SearchForMovie from './Page/SearchForMovie';

function App() {
  const [auth,setAuth] = useState(false)

  const Login = ()=>{
    
    setAuth(!auth)
  }

  return (
    <BrowserRouter>
    <NavBar Login={Login} auth={auth}  />
    <Routes>
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/MovieList' element={<MovieList/>}/>
      <Route path='/AddMovie' element={<AddMovie/>}/>
      <Route path='/SearchForMovie' element={<SearchForMovie/>} />
</Routes>
    </BrowserRouter>
   
  );
}

export default App;