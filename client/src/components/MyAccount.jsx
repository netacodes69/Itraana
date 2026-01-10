import { useState } from 'react';

export default function MyAccount() {
  const [isEditing, setIsEditing] = useState(false);

  const orders = [
    {
      id: 'ORD-2024-001',
      date: 'December 15, 2024',
      status: 'Delivered',
      total: 6498,
      items: 2
    }
  ];

  const wishlistItems = [
    { id: 1, name: 'Amber', price: 2899, image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&q=80' },
    { id: 2, name: 'Rose Attar', price: 3499, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&q=80' }
  ];

  return (
    <section className="min-h-screen bg-neutral-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-200/40"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-amber-100/60">
              Your Account
            </p>
          </div>
          <h1 className="text-3xl font-extralight tracking-tight">
            Welcome, <span className="text-amber-100">User</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Profile Section */}
        <div className="bg-white p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-neutral-800">U</span>
              </div>
              <div>
                <h2 className="text-xl font-light mb-1">Utkarsh Pratap</h2>
                <p className="text-sm text-neutral-500">user@email.com</p>
              </div>
            </div>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 border border-neutral-800 text-neutral-800 text-xs uppercase tracking-wider hover:bg-neutral-800 hover:text-white transition-all"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing && (
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    defaultValue="Utkarsh Pratap"
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-neutral-800 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    defaultValue="user@email.com"
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-neutral-800 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button className="px-8 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all">
                Save Changes
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Orders */}
          <div className="bg-white p-8">
            <h3 className="text-lg font-light tracking-wide mb-6 flex items-center justify-between">
              <span>Recent Orders</span>
              <span className="text-sm text-neutral-500">({orders.length})</span>
            </h3>

            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-neutral-200 p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">Order #{order.id}</p>
                        <p className="text-sm text-neutral-600 mt-1">{order.date}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs uppercase tracking-wider">
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-neutral-200">
                      <p className="text-sm text-neutral-600">{order.items} items</p>
                      <p className="font-light">₹{order.total.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-neutral-500 mb-3">No orders yet</p>
                <a href="/collections" className="text-sm uppercase tracking-wider text-neutral-800 underline underline-offset-4 hover:opacity-60 transition">
                  Start Shopping
                </a>
              </div>
            )}
          </div>

          {/* Wishlist */}
          <div className="bg-white p-8">
            <h3 className="text-lg font-light tracking-wide mb-6 flex items-center justify-between">
              <span>Wishlist</span>
              <span className="text-sm text-neutral-500">({wishlistItems.length})</span>
            </h3>

            {wishlistItems.length > 0 ? (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border border-neutral-200 p-3 group hover:border-neutral-400 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider mb-1">{item.name}</h4>
                        <p className="text-sm font-light">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      <button className="text-xs uppercase tracking-wider text-neutral-700 hover:text-neutral-900 transition self-start">
                        Add to Cart →
                      </button>
                    </div>
                    <button className="self-start text-neutral-400 hover:text-red-500 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-neutral-500 mb-3">Your wishlist is empty</p>
                <a href="/collections" className="text-sm uppercase tracking-wider text-neutral-800 underline underline-offset-4 hover:opacity-60 transition">
                  Explore Collection
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Sign Out */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border border-neutral-300 text-neutral-700 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
            Sign Out
          </button>
        </div>

      </div>
    </section>
  );
}