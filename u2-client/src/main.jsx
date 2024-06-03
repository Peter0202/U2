import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './routes/Route.jsx'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import AdminHome from './pages/AdminHome.jsx';
import RequireAuth from './pages/RequireAuth.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import LandingPage from './pages/LandingPage.jsx';
import UserHome from './pages/UserHome.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
let redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

const wrapPrivateRoute = (element, roles) => {
  return (
    <PrivateRoute allowedRoles = {roles}>
      {element}
    </PrivateRoute>
  );
};
const httpClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Unauthorized/>,
    children: [
      {
        path: "/admin",
        element: wrapPrivateRoute(<AdminHome/> , ["Admin"])
      },
      {
        path: "/user",
        element: wrapPrivateRoute(<UserHome/> , ["User"])
      },
      {
        path: "/landingPage",
        element: <LandingPage/>
      },
      {
        path: "/unauthorized",
        element: <Unauthorized/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider domain= {domain} cacheLocation='localstorage' useRefreshTokens={true} clientId={clientId} authorizationParams={{
    redirect_uri: redirectUri}}>
    <QueryClientProvider client={httpClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>

  
)
