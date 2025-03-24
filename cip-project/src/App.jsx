import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Welcome from './components/Home/Home';
import CultureHolidays from './components/Culture-Holidays/CultureHolidays';
import Sports from './components/Sports/Sports';
import Cuisine from './components/Cuisine/Cuisine';
import Languages from './components/Culture-Languages/Languages';
import Geografhy from './components/Geography/Geografhy';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/geography" element={<Geografhy />} />
            <Route path="/holidays" element={<CultureHolidays />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
