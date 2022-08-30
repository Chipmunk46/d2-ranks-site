import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routers, Route} from 'react-router-dom';
import DungeonStats from './pages/DungeonStats';

function App() {
  return (
    <>
      <Router>
        <Routers>
          <Route path='/' exact element={<DungeonStats/>}></Route>
        </Routers>
      </Router>
    </>
  );
}

export default App;
