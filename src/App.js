import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
