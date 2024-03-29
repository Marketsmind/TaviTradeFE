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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<PasswordResetLink />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/send-email" element={<EmailSent />} />
      </Routes>
    </>
  );
}

export default App;
