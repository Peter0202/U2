import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const RequireAuth = ({allowedRoles}) =>{
    const { user, getIdTokenClaims } = useAuth0();
    if (user) {
        let claims = getIdTokenClaims();
        localStorage.setItem("roles", user["http://www.u2.com/roles"])
    }
    
    
    const location = useLocation();
    let userRoles = localStorage.getItem("roles");
    console.log(allowedRoles?.includes(userRoles));
    
    return(
        
        allowedRoles?.includes(userRoles)
        ? <Outlet/>
        :user?.email && user.sub !== 0
        ?<Navigate to = "/" state={{from: location}} replace />
        :<Navigate to = "/unauthorized" state={{from:location}} replace />
    );
}

export default RequireAuth;