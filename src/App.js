import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/app"} element={<div className="App"></div>} />
      </Routes>
    </Router>
  );
}

export default App;
