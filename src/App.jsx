import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/index";
import { hostsService } from "./mock/hosts.js";

import hospDefault from "./assets/images/image-default.png";

function App() {
  const [count, setCount] = useState(0);
  const [hosts, setHosts] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  function saludoHospedaje(name) {
    console.log("Hice click en: " + name);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setHosts(hostsService)}>
          Llenar Hospedajes
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Hola soy Maria Laura</p>
      {hosts != null && (
        <div className="container">
          {hosts.map((host) => (
            <Card
              texto={host.name}
              key={host.id}
              isSuperHost={host.isSuperHost}
              imageUrl={host.imageUrl}
              handleClick={() => {
                saludoHospedaje(host.name);
              }}
            />
          ))}
        </div>
      )}
      {hosts == null && <img src={hospDefault}></img>}
    </>
  );
}

export default App;
