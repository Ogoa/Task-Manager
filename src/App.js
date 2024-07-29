import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
import Register from "./Register";
import NavBar from "./NavBar";
import EditTask from "./EditTask";

function App() {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/home' Component={Home} />
          <Route path='/create' Component={Create} />
          <Route path='/register' Component={Register} />
          <Route path='/edit' Component={EditTask} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
