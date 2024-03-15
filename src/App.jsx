import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="wrapper">
        <h1>Hej och välkommen till din massör i Stockholm!</h1>
      </main>
    </div>
  );
}

export default App;
