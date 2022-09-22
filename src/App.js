import React from "react";
import "./App.css";
import { DataProvider } from "./utils/DataProvider";
import { Pages } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
// import { getDatabase, ref, set } from "firebase/database";

function App() {
  return (
    <DataProvider>
      <Router>
        <Pages />
      </Router>
    </DataProvider>
  );
}

export default App;
