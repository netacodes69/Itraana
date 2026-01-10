import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="h-[calc(100vh-5rem)] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-center px-6 text-white">

        <p className="text-sm uppercase tracking-widest mb-6 opacity-80">
          Crafted Attars
        </p>

        <h1 className="text-[clamp(3rem,8vw,7rem)] font-light tracking-tight mb-6">
          ITRAANA
        </h1>

        <p className="text-sm uppercase tracking-widest opacity-70">
          Timeless Attars · Pure Essence · Quiet Luxury
        </p>

      </div>
    </section>
  );
}
