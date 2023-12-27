import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      {window.location.pathname === "/" ? (
        <HomePage />
      ) : (
        <div>Nenhuma rota encontrada</div>
      )}
    </Router>
  );
};

export default App;
