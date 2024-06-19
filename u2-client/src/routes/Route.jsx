import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
const Root = () => {
  const { user, getIdTokenClaims } = useAuth0();
  
  return (
    <div style={{ display: "flex", flexDirection: "flex-col" }}>
      <div style={{ display: "flex", flexDirection: "flex-row" }}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Root;