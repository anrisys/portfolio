import { BrowserRouter } from "react-router-dom";
import Homepage from "./Components/page/Homepage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
