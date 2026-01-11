import { useNavigate, useLocation } from "react-router-dom";
import { User, ShoppingBag } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, setIsAuthOpen } = useAuth();
  const { setIsCartOpen } = useCart();

  /* 🔁 Navigate to home first, then scroll */
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Account click */
  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      setIsAuthOpen(true);
    }
  };

  /* Cart click */
  const handleCartClick = () => {
    if (isAuthenticated) {
      setIsCartOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
      <nav className="mx-auto max-w-[1400px] px-8 h-20 flex items-center justify-between">

        {/* LEFT */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("testimonials")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            Testimonials
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div
          onClick={() => navigate("/")}
          className="text-lg tracking-[0.35em] font-semibold cursor-pointer"
        >
          ITRAANA
        </div>

        {/* RIGHT */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black items-center">
          
          {/* ✅ FIXED: route changed from /research → /collection */}
          <li
            onClick={() => navigate("/collection")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            COLLECTION
          </li>

          {/* CART */}
          <li
            onClick={handleCartClick}
            className="cursor-pointer hover:opacity-70 transition flex items-center gap-1"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Cart
          </li>

          {/* ACCOUNT */}
          <li onClick={handleAccountClick} className="cursor-pointer">
            {!isAuthenticated ? (
              <span className="hover:opacity-70 transition">Account</span>
            ) : (
              <div className="w-8 h-8 rounded-full border border-black/60 flex items-center justify-center hover:border-black transition">
                <User size={14} strokeWidth={1.5} className="opacity-80" />
              </div>
            )}
          </li>
        </ul>

      </nav>
    </header>
  );
}
