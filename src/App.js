import React from 'react';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './PAGES/Home';
import SearchResult from './PAGES/SearchResult';
import LogIn from "./PAGES/Auth/LogIn"
import SignIn from './PAGES/Auth/SignIn';
import Authentication from './PAGES/Auth/Authentication';
import WatchList from './PAGES/WatchList';
function App() {
  return (
  <BrowserRouter>
  <Routes>
  {/* <Route index element={<Authentication/>} /> */}
  <Route path="/login" element={<LogIn/>} /> 
  <Route path="/signin" element={<SignIn/>} /> 
  <Route path='/' element={<Home/>} /> 
  <Route path='/watchlist' element={<WatchList/>}/>
  <Route path="/details/:uuid" element={<SearchResult/>} />
  </Routes>
  </BrowserRouter>

  )
  }

export default App;
