import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import PasswordResetLink from "./pages/Auth/PasswordResetLink";
import PasswordReset from "./pages/Auth/PasswordReset";
import EmailSent from "./pages/Auth/EmailSent";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
