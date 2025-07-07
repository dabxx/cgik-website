// components/Layout.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navbar';
import Footer from './Footer';
import { getRouteByPath } from '../config/Routes';

const Layout = ({ children }) => {
  const location = useLocation();

  // Update document title based on current route
  useEffect(() => {
    const currentRoute = getRouteByPath(location.pathname);
    if (currentRoute && currentRoute.meta.title) {
      document.title = currentRoute.meta.title;
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;