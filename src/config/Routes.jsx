// config/routes.js
import React from 'react';

// Regular imports for critical pages
import Home from '../pages/Home';
import Services from '../pages/Services';

// Lazy imports for better performance
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
// const Sermons = React.lazy(() => import('../pages/Sermons'));
// const Events = React.lazy(() => import('../pages/Events'));
const Ministries = React.lazy(() => import('../pages/OurMinistries'));
const History = React.lazy(() => import('../pages/History'));
// const Gallery = React.lazy(() => import('../pages/Gallery'));

export const routes = [
  {
    path: '/home',
    component: Home,
    name: 'Home',
    showInNav: true,
    lazy: false,
    meta: {
      title: 'Home - Church Name',
      description: 'Welcome to our church community'
    }
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    showInNav: true,
    lazy: true,
    meta: {
      title: 'About Us - Church Name',
      description: 'Learn about our church history and mission'
    }
  },
  {
    path: '/services',
    component: Services,
    name: 'Services',
    showInNav: true,
    lazy: false,
    meta: {
      title: 'Services & Sermons - Church Name',
      description: 'Join us for worship services and sermons'
    }
  },
//   {
//     path: '/sermons',
//     component: Sermons,
//     name: 'Sermons',
//     showInNav: true,
//     lazy: true,
//     meta: {
//       title: 'Sermons - Church Name',
//       description: 'Listen to our latest sermons and teachings'
//     }
//   },
  {
    path: '/ministries',
    component: Ministries,
    name: 'Our Ministries',
    showInNav: true,
    lazy: true,
    meta: {
      title: 'Ministries - Church Name',
      description: 'Discover our various ministry programs'
    }
  },
  {
    path: '/history',
    component: History,
    name: 'Church History',
    showInNav: true,
    lazy: true,
    meta: {
      title: 'History - Church Name',
      description: 'Discover our various ministry programs'
    }
  },
//   {
//     path: '/events',
//     component: Events,
//     name: 'Events',
//     showInNav: true,
//     lazy: true,
//     meta: {
//       title: 'Events - Church Name',
//       description: 'Stay updated with our upcoming events'
//     }
//   },
//   {
//     path: '/gallery',
//     component: Gallery,
//     name: 'Gallery',
//     showInNav: true,
//     lazy: true,
//     meta: {
//       title: 'Gallery - Church Name',
//       description: 'View photos from our church activities'
//     }
//   },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact',
    showInNav: true,
    lazy: true,
    meta: {
      title: 'Contact Us - Church Name',
      description: 'Get in touch with our church community'
    }
  }
];

// Helper function to get routes for navigation
export const getNavRoutes = () => {
  return routes.filter(route => route.showInNav);
};

// Helper function to get route by path
export const getRouteByPath = (path) => {
  return routes.find(route => route.path === path);
};