import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App' sx={{}}> 
      <Routes> 
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;