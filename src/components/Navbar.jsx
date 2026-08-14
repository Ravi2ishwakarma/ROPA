import { useState } from "react";
import { Link } from "react-router-dom";
import { Truck, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="h-20 flex items-center justify-between p-2">
          <Link to="/" className="flex items-center gap-3">
            <div>
              <h1 className="font-['Montserrat'] font-bold italic tracking-tight text-5xl text-blue-500">
                ROPA
              </h1>
              <p className="text-xs font-bold font-montserrat text-blue-600">
                RIDE • ORDER • PAY
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 bbord transition">
              Home
            </Link>
            <Link to="/ride" className="hover:text-blue-600 bbord transition">
              Rides
            </Link>

            <Link to="/parcel" className="hover:text-blue-600 bbord transition">
              Parcel Delivery
            </Link>

            <Link to="/rental" className="hover:text-blue-600 bbord transition">
              Vehicle Rental
            </Link>

            <Link to="/tour" className="hover:text-blue-600 bbord transition">
              City Tours
            </Link>

            <Link to="/shop" className="hover:text-blue-600 bbord transition">
              Shop
            </Link>

            <Link to="/about" className="hover:text-blue-600 bbord transition">
              About Us
            </Link>

            <Link to="/contact" className="hover:text-blue-600 bbord transition">
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="px-6 py-2 border border-blue-600 rounded-xl text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-500px pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 p-4 border-t">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/ride"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Rides
            </Link>

            <Link
              to="/parcel"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Parcel Delivery
            </Link>

            <Link
              to="/rental"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Vehicle Rental
            </Link>

            <Link
              to="/tour"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              City Tours
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Shop
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Contact Us
            </Link>

            <div className="flex flex-col gap-3 mt-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 border border-blue-600 rounded-xl text-blue-600 font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-blue-600 text-white font-medium"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;