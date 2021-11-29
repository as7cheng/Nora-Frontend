import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Navigation from './components/nav/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sample from './pages/sample';
import Query from './pages/query';
import Doc from './pages/doc';
import About from './pages/about';
import Donate from './pages/donate';


function App() {
  return (
    <>
     {/* <Helmet> */}
     {/*    <style>{'body { background-color: #DADED4; }'}</style> */}
     {/*  </Helmet> */}
      <Navigation />
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/sample' element={<Sample/>}/>
        <Route path='/doc' element={<Doc/>}/>
        <Route path='/query' element={<Query/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
