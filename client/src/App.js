import React from 'react';
import Registration from './registration';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register'element={<Registration/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/dashboard'element={<Dashboard/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
