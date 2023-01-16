import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Users" element={<DashboardPage />} />
          <Route path="/post/:postId" element={<UserInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
