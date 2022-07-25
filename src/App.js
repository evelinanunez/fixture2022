import React from "react"; // Esto es porque uso la librearia React en esta app.
import "./App.css";
import Nav from "./components/Home/Nav";
import UltimasNoticias from "./components/Home/UltimasNoticias";

function App() {
  return (
    <>
      <Nav />
      <main>
        <div className="container mt-5">
          <div className="row">
                        <UltimasNoticias />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
