// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./config/Routes";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";
import { ChakraProvider } from "@chakra-ui/react";

// Lazy loading wrapper component
const LazyRoute = ({ component: Component, ...props }) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Dynamic routes from config */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.lazy ? (
                  <LazyRoute component={route.component} />
                ) : (
                  <route.component />
                )
              }
            />
          ))}

          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
