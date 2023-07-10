import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function App() {
  return (
    <header>
      <h1>MovieBuff</h1>
      <button>
        <Link to="/">
          <strong>Home</strong>
        </Link>
      </button>
    </header>
  );
}
export default App;
