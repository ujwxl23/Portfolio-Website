import Routers from "./common/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
