import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Amber",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&q=80",
    },
    {
      id: 2,
      name: "Rose Attar",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&q=80",
    },
  ]);

  
  const handleRemove = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <section className="min-h-screen bg-neutral-50">
      {/* HEADER */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <h1 className="text-3xl font-light tracking-wide">
            Wishlist
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-xs uppercase tracking-widest border px-4 py-2 hover:bg-white hover:text-black transition"
          >
            Back
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-500 mb-4">
              Your wishlist is empty
            </p>
            <a
              href="/collections"
              className="text-xs uppercase tracking-widest underline underline-offset-4 hover:opacity-60"
            >
              Explore Collection
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 flex gap-4 border hover:border-neutral-400 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm font-light">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="flex gap-4 text-xs uppercase tracking-widest">
                    <button className="hover:underline">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
