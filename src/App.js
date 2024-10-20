import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Predict from './predict';
import Newfile from './newfile';
import Dashboard from './dashboard';
import DisasterManagementTips from './tips';
function App() {
  return (
    <Router>
      <div className='App' sx={{}}> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/newfile" element={<Newfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tips" element={<DisasterManagementTips />} />
        

      </Routes>
      </div>
    </Router>
  );
}

export default App;
