import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App() {
  const [userArray, setUserArray] = useState([]);
  const [loggedIn , setLoggedIn] = useState(false)
  const [count  , setCount] = useState(0)
  const [lock  , setLocked] = useState(false)
  const handleGetStarted = (data) => {
    const allUser = [...userArray, data];
    setUserArray(allUser)
  };

  const loginUser = (data) =>{
   const {firstName, phone} = data
    const find = userArray.find(x=>x.firstName === firstName && x.phone === phone)
     if (find) {
       alert("Login Successfully")
       setLoggedIn(true)
      }else{
       setCount(count=>count+1)
      alert("Invalid credentials")
      if (count===3) {
        setLocked(true)
      }
     }
    } 
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login userArray={userArray} loginUser={loginUser} lock={lock} />}/>
        <Route path="/signup" element={<SignUp handleGetStarted={handleGetStarted}/>}  />
      </Routes>
    </Router>
  );
}

export default App;
