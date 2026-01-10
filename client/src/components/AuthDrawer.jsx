import { X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AuthDrawer() {
  const { isAuthOpen, setIsAuthOpen } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "signup"

  if (!isAuthOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsAuthOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white z-50 flex flex-col">

        {/* Close */}
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-6 right-6 z-10"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-10">

          {/* LOGIN */}
          {mode === "login" && (
            <>
              <h2 className="text-lg tracking-widest uppercase mb-6">
                Login
              </h2>

              <div className="space-y-6 mb-10">
                <div>
                  <label className="text-xs uppercase tracking-widest">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest">
                    Password*
                  </label>
                  <input
                    type="password"
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest">
                  Login
                </button>
              </div>

              {/* Switch */}
              <p className="text-xs uppercase tracking-widest text-center">
                Don’t have an account?{" "}
                <span
                  onClick={() => setMode("signup")}
                  className="cursor-pointer underline underline-offset-4"
                >
                  Create account
                </span>
              </p>
            </>
          )}

          {/* SIGNUP */}
          {mode === "signup" && (
            <>
              <h2 className="text-lg tracking-widest uppercase mb-6">
                Create Account
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="text-xs uppercase tracking-widest">
                    First Name*
                  </label>
                  <input
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest">
                    Last Name*
                  </label>
                  <input
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest">
                    Password*
                  </label>
                  <input
                    type="password"
                    className="w-full border-b border-black focus:outline-none py-2"
                  />
                </div>

                <button className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest">
                  Create Account
                </button>
              </div>

              {/* Switch */}
              <p className="text-xs uppercase tracking-widest text-center">
                Already have an account?{" "}
                <span
                  onClick={() => setMode("login")}
                  className="cursor-pointer underline underline-offset-4"
                >
                  Login
                </span>
              </p>
            </>
          )}

        </div>
      </div>
    </>
  );
}
