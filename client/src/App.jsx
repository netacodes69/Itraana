import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductSection from "./components/ProductSection";



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
              <ProductSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
