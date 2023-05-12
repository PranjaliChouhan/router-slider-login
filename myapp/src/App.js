import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";




import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Login.css";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      
    </Router>
  );
}

export default App;