import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthOpen } = useAuth();

  return (
    <header className="w-full bg-white border-b border-black/10">
      <nav className="mx-auto max-w-[1400px] px-8 h-20 flex items-center justify-between">

        {/* LEFT LINKS */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black">
          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            About
          </li>
          <li
            onClick={() => navigate("/work")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            Work
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div
          onClick={() => navigate("/")}
          className="text-lg tracking-[0.35em] font-semibold cursor-pointer"
        >
          ITRAANA
        </div>

        {/* RIGHT LINKS */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black items-center">

          <li
            onClick={() => navigate("/research")}
            className="cursor-pointer hover:opacity-70 transition"
          >
            Research
          </li>

          {/* CART */}
          <li
            onClick={() =>
              isAuthenticated ? navigate("/cart") : setIsAuthOpen(true)
            }
            className="cursor-pointer hover:opacity-70 transition"
          >
            Cart
          </li>

          {/* ACCOUNT / PROFILE */}
          {!isAuthenticated ? (
            <li
              onClick={() => setIsAuthOpen(true)}
              className="cursor-pointer hover:opacity-70 transition"
            >
              Account
            </li>
          ) : (
            <li className="cursor-pointer">
              <div className="w-8 h-8 rounded-full border border-black/60 flex items-center justify-center hover:border-black transition">
                <User size={14} strokeWidth={1.5} className="opacity-80" />
              </div>
            </li>
          )}

        </ul>

      </nav>
    </header>
  );
}
