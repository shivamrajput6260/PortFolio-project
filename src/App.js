import React from "react";

import HeaderNew from "./component/HeaderNew";
import Login from "./component/Login";
import Register from "./component/Register";
import HomePage from "./component/HomePage";
import { Route, Routes } from "react-router-dom";
import Protected from "./component/Protected";
import ProtectedData from "./component/Protected Folder/ProtectedData";
import About from "./component/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderNew />
              <HomePage />
              
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="home" element={<Protected Component={ProtectedData} />} />
        <Route path="*" element={<div>not found page</div>} />
      </Routes>
    </>
  );
};
export default App;
