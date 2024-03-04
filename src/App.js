import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Auth/Login/Login";
import { Dashboard } from "./Component/Dashboard";
import Datable from "./Component/Datable";
import Faq from "./Component/Faq";
// import Register from "./Component/Auth/Login/Register";
import RegisterPage from "./Component/Auth/Login/Register";
function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />}>
   
          </Route>
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/datatable" element={<Datable />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
