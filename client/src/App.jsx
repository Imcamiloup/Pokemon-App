import "./App.css";
import { Route, Routes, useLocation} from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== '/' && <NavBar  />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
