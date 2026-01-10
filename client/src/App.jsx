import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
