export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="black"/>
              <path d="M12 17L17 12H14V7H10V12H7L12 17Z" fill="black"/>
            </svg>
            <h1 className="text-2xl font-bold">Uber Eats</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium">Sign In</button>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold mb-4">Order food to your door</h2>
              
              {/* Search Bar */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="flex-1 p-2 border-b-2 border-gray-300 focus:border-black outline-none"
                  />
                  <button className="bg-black text-white px-4 py-3 rounded-md font-medium">
                    Find Food
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Explore by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Pizza', 'Burgers', 'Sushi', 'Chinese', 'Mexican', 'Dessert', 'Italian', 'Healthy', 'Breakfast', 'Indian', 'Thai', 'Fast Food'].map((category, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2"></div>
                <p className="text-center font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular restaurants near you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute bottom-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded">
                    25-40 min
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Restaurant Name {item}</h3>
                    <div className="bg-gray-100 text-sm font-medium px-2 py-1 rounded">4.8</div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">$$ • Cuisine Type</p>
                  <p className="text-gray-600 text-sm mt-1">1.2 mi • $1.99 delivery fee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-lg mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Order with the Uber Eats app</h2>
              <p className="text-gray-300 mb-6">Get the best food delivery experience with the app. Available on iOS and Android.</p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-3 rounded-md font-medium">App Store</button>
                <button className="bg-white text-black px-6 py-3 rounded-md font-medium">Google Play</button>
              </div>
            </div>
            <div className="w-full max-w-xs">
              <div className="bg-gray-800 aspect-[9/16] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Uber Eats</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Engineering Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Restaurants</a></li>
                <li><a href="#" className="hover:underline">Merchants</a></li>
                <li><a href="#" className="hover:underline">Uber Eats for Business</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Support Center</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Safety</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Uber Eats Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
