import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingScreenHome from "./Components/Screens/LandingScreenHome";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

function App() {
  const loggedin = false;

  return (
    <Router>
      <div className="App">
        {loggedin ? (
          <div>
            <h1>loggedin</h1>
          </div>
        ) : (
          <Routes>
            <Route exact path="/" element={<LandingScreenHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
