import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
