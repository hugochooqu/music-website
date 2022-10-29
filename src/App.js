import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Components/login';
import Home from './Components/home';
import Download from './Components/download';
import Main from './Components/main';
import SignUp from './Components/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/signin" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
    
 
   

    
  
 
}

export default App;
