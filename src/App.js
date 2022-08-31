import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import DungeonStats from './pages/DungeonStats.js';
import Guides from './pages/Guides';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Guides/>}/>
        </Routes>
    </>
  );
}

export default App;
