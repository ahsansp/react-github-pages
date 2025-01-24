import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login, Sigin, VerifiyEmail } from "./page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sigin"} element={<Sigin />} />
        <Route path={"/verify"} element={<VerifiyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
