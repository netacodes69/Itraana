import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import MyAccount from "./components/MyAccount";
import Footer from "./components/Footer";

import AuthDrawer from "./components/AuthDrawer";
import CartDrawer from "./components/CartDrawer";

import Collection from "./pages/Collection"; // ✅ ADD THIS

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* GLOBAL UI */}
      <NavBar />
      <AuthDrawer />
      <CartDrawer />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Routes>
          {/* HOME */}
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

          {/* COLLECTION */}
          <Route path="/collection" element={<Collection />} />

          {/* MY ACCOUNT (PROTECTED) */}
          <Route
            path="/account"
            element={
              isAuthenticated ? <MyAccount /> : <Navigate to="/" />
            }
          />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
