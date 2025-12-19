function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-2">FreshCo 🌱</h2>
          <p className="text-sm text-green-200">
            Fresh organic vegetables directly from local farms to your home.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-green-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-green-200">
            <li>Leafy Greens</li>
            <li>Root Vegetables</li>
            <li>Seasonal Fruits</li>
            <li>Organic Staples</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-green-200">
            📍 India <br />
            📧 support@farmfresh.com <br />
            📞 +91 98765 43210
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-green-300">
        © {new Date().getFullYear()} FarmFresh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;