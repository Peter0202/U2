import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


function Auth0ProviderWithNavigate({ children }) {
  
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  const navigate = useNavigate();

  if (!domain || !clientId || !redirectUri) {
    throw Error("Unable to initialize auth0. something missing");
  }
  const onTheTimeThatRedirecting = () => {
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onTheTimeThatRedirecting}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;