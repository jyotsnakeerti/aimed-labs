
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';

function App() {

  return (

    <div>
      <Router>
     <Routes>
       <Route path="/aimed-labs" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/success" element={<Success/>} />
     </Routes>
   </Router>
    </div>
  );
}

export default App;
