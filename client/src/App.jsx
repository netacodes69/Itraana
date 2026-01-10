import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ProductSection from "./components/ProductSection";
import AuthDrawer from "./components/AuthDrawer";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global UI */}
      <NavBar />
      <AuthDrawer />

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Philosophy />
                <ProductSection />
                <Testimonials />
              </>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
