import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import DungeonStats from './pages/DungeonStats.js';
import Guides from './pages/Guides';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Home from './pages/Home';

function App() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    </>
  );
}

export default App;
