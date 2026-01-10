import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Philosophy />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
