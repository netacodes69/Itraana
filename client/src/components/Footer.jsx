export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Store Locator */}
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6">
            Store Locator
          </h4>

          <p className="text-sm text-white/70 mb-6">
            Enter a location to find the nearest store
          </p>

          <div className="flex items-center border-b border-white/30 pb-2">
            <input
              type="text"
              placeholder="Search by city or postcode"
              className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
            />
            <button className="text-xs tracking-widest uppercase ml-4 hover:opacity-70 transition">
              Search
            </button>
          </div>
        </div>

        {/* Center Brand */}
        <div className="flex items-center justify-center">
          <h2 className="text-lg tracking-[0.4em] uppercase">
            ITRAANA
          </h2>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6">
            Subscribe to Newsletter
          </h4>

          <div className="flex items-center border-b border-white/30 pb-2 mb-4">
            <input
              type="email"
              placeholder="Insert your email"
              className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
            />
            <button className="text-xs tracking-widest uppercase ml-4 hover:opacity-70 transition">
              Confirm
            </button>
          </div>

          <label className="flex items-start gap-2 text-xs text-white/60">
            <input type="checkbox" className="mt-1" />
            <span>
              I declare that I have read the{" "}
              <span className="underline cursor-pointer">
                Privacy Policy
              </span>
            </span>
          </label>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Links */}
      <div className="max-w-[1400px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-widest uppercase text-white/70">
        
        <div className="flex flex-wrap gap-6 justify-center">
          <span className="cursor-pointer hover:text-white transition">
            Services
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Order Tracking
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Returns
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Customer Care
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Legal Area
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Corporate
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Follow Us
          </span>
        </div>

        <div className="cursor-pointer hover:text-white transition">
          Country & Language — India / English
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <p className="text-center text-[10px] text-white/40 py-6">
          © 2026 ITRAANA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
