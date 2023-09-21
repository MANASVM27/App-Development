import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../Components/Navbar";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import About from '../Pages/About';
import Contactus from '../Pages/Contactus';
import Dashboard from "../Pages/Dashboard";
import Attendance from "../Pages/Attendance";
import Marks from "../Pages/Marks";
import Subjects from "../Pages/Subjects";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route path="/home" element={<><NavBar/><Home/></>} /> */}
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/about" element={<><NavBar/><About/></>} /> */}
          {/* <Route path="/contact" element={<><NavBar/><Contactus/></>} /> */}
          <Route path="/dashboard" element={<><NavBar/><Dashboard/></>} />
          <Route path="/attendance" element={<><NavBar/><Attendance/></>} />
          <Route path="/marks" element={<><NavBar/><Marks/></>} />
          <Route path="/subjects" element={<><NavBar/><Subjects/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;