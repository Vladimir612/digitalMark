import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
    return (
        <div className="App" style={{ width: "100%" }}>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
