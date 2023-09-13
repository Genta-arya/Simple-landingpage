import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './View/Home/Index';
import DetailNotFound from './View/Home/Component/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="*" element={<DetailNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
