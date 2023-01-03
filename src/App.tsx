import React from "react";
import Dashboard from "./components/Login/dashboard/dashboard";
import Header from "./components/Login/header/Header";
/*import {BrowserRouter} from "react-router-dom"
import Login from "./components/Login/login";*/
import Sidebar from "./components/Login/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
