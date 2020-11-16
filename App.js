import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route , Link} from 'react-router-dom';
import HomePage from './comps/home';

import Header from './comps/Header';
import MenuAppBar from './comps/MenuAppBar';

import Main from './comps/main';
import Footer from './comps/Footer';
import Main3 from './comps/main3';

import Main2 from './comps/Main2';

import Main4 from './comps/main4';

import Main5 from './comps/main5'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <MenuAppBar/>
    <Main/>
    <Main5/><br></br>
    <Main4/><br></br>
    <Main2/>
    <Main3/>
   

    <Footer/>
    <Route path='/' component={HomePage} />
    </BrowserRouter>
  )
  ;
}

export default App;
