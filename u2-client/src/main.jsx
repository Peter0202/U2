import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Auth0ProviderWithNavigate from './components/Auth0WithNavigate.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './routes/Route.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

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
    children: [
      {

      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider domain= {domain} cacheLocation='localstorage' useRefreshTokens={true} clientId={clientId} authorizationParams={{
    redirect_uri: redirectUri,
    scope: "read:current_user update:current_user_metadata"}}>
    <QueryClientProvider client={httpClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>
)
