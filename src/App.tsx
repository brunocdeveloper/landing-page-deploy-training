import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Testando se o deploy vai ser feito mesmo com outra branch</p>
    </div>
  );
}

export default App;
