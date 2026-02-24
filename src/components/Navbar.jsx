// components/Navigation.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavRoutes } from "../config/Routes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRoutes = getNavRoutes();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <nav className="bg-[#012646] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-32">
          {/* Left: empty spacer on mobile, hidden on desktop */}
          <div className="flex-1 md:hidden" />

          {/* Center: Logo */}
          <div className="flex justify-center md:justify-start flex-shrink-0 w-52">
            <Link to="/home">
              <img src="/images/church-logo.png" alt="Church Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-baseline space-x-4">
              {navRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActiveRoute(route.path)
                      ? "text-white underline"
                      : "text-white hover:text-orange-600"
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Mobile menu button */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#012646] border-t border-blue-900">
              {navRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActiveRoute(route.path)
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/50 border-l-4 border-purple-500"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
