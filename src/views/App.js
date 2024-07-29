import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
import Register from "./Register";
import EditTask from "./EditTask";
import NavBar from "./NavBar";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit" element={<EditTask />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
