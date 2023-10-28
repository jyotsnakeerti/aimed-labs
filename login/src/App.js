
import React from 'react';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/login" element={<Login/>} />
  //       <Route path="/register" element={<Register/>} />
  //       <Route path="/success" element={<Success/>} />
  //     </Route>
  //         )
  //   );
  return (
    // <div>
    // {/* <RouterProvider router={router}></RouterProvider>
    //  */}
    //  <Login/>
    // </div>
    <Route>
    <Route path="/aimed-labs" element={<Login/>}>
      {/* <Route path="/aimed-labs" element={<Login/>} /> */}
          <Route path="/register" element={<Register/>} />
          <Route path="/success" element={<Success/>} />
    </Route>
  </Route>
  );
}

export default App;
