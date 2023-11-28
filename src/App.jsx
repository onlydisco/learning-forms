import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="form">
        <label className="label" htmlFor="name">
          Name: <input className="name" id="name" name="name" type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
