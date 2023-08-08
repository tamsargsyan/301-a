import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
