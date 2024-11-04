import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [phrase, setPhrase] = useState("");
  if (phrase === "Hello React") {
    alert("You may pass!");
  }

  return (
    <div>
      <h2>Alert message when phrase matches</h2>
      <input value={phrase} onChange={(e) => setPhrase(e.target.value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
