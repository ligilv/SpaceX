import React, { useEffect } from "react";
import ReactModal from "react-modal";

import "./App.css";

import Dashboard from "./Components/Dashboard";

ReactModal.setAppElement("#root ");
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
