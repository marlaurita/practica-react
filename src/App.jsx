import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/index";
import hospImg from "./assets/images/hospedaje.jpg";

function App() {
  const [count, setCount] = useState(0);
  const hosts = [
    {
      id: 1,
      name: "cabaña en Quatro Barras, Brasil",
      price: "$480,260 CLP",
      isSuperHost: true,
      imageUrl: hospImg,
    },
    {
      id: 2,
      name: "cabaña en Quatro Barras, Perú",
      price: "$480,260 CLP",
      isSuperHost: false,
      imageUrl: hospImg,
    },
    {
      id: 3,
      name: "cabaña en Quatro Barras, Perú",
      price: "$480,260 CLP",
      isSuperHost: false,
      imageUrl: hospImg,
    },
    {
      id: 4,
      name: "cabaña en Quatro Barras, Brasil",
      price: "$480,260 CLP",
      isSuperHost: true,
      imageUrl: hospImg,
    },
    {
      id: 5,
      name: "cabaña en Quatro Barras, Perú",
      price: "$480,260 CLP",
      isSuperHost: false,
    },
    {
      id: 6,
      name: "cabaña en Quatro Barras, Perú",
      price: "$480,260 CLP",
      isSuperHost: true,
    },
  ];

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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Hola soy Maria Laura</p>
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
    </>
  );
}

export default App;
