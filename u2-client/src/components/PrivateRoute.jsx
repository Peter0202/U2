import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, allowedRoles }) => {
  const location = useLocation();

  const { user, getIdTokenClaims } = useAuth0();
    if (user) {
        let claims = getIdTokenClaims();
        localStorage.setItem("roles", user["http://www.u2.com/roles"])
    }
    const userRoles = localStorage.getItem("roles");
    const authenticate = allowedRoles?.includes(userRoles)
    

  return authenticate ? (
    children
  ) : (
    <Navigate
      to= "/unauthorized"
    />
  );
};

export default PrivateRoute;