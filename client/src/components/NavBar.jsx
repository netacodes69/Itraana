import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b border-black/10">
      <nav className="mx-auto max-w-[1400px] px-8 h-20 flex items-center justify-between">
        
        {/* Left Links */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black">
          <li onClick={() => navigate("/about")} className="cursor-pointer hover:opacity-70 transition">
            About
          </li>
          <li onClick={() => navigate("/work")} className="cursor-pointer hover:opacity-70 transition">
            Work
          </li>
        </ul>

        {/* Center Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-lg tracking-[0.35em] font-semibold cursor-pointer"
        >
          ITRAANA
        </div>

        {/* Right Links */}
        <ul className="flex gap-6 text-xs tracking-widest uppercase text-black">
          <li onClick={() => navigate("/research")} className="cursor-pointer hover:opacity-70 transition">
            Research
          </li>
          <li onClick={() => navigate("/login")} className="cursor-pointer hover:opacity-70 transition">
            Account
          </li>
          <li onClick={() => navigate("/login")} className="cursor-pointer hover:opacity-70 transition">
            Cart
          </li>
        </ul>

      </nav>
    </header>
  );
}
