import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";

function App() {
  const baseUrl = "react-github-pages/";
  return (
    <Router>
      <Routes>
        <Route path={baseUrl} element={<Home />} />
        <Route path={`${baseUrl}app`} element={<div className="App"></div>} />
      </Routes>
    </Router>
  );
}

export default App;
