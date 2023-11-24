import './App.css';
import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App() {
  const [userArray, setUserArray] = useState([]);

  const handleGetStarted = (data) => {
    const allUser = [...userArray, data];
    setUserArray(allUser)
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login userArray={userArray}/>}  />
        <Route path="/signup" element={<SignUp handleGetStarted={handleGetStarted}/>}  />
      </Routes>
    </Router>
  );
}

export default App;
