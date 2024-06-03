import { AppBar } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

function Navbar() {
    const { user, getIdTokenClaims } = useAuth0();
    if (user) {
        let claims = getIdTokenClaims();
        localStorage.setItem("roles", user["http://www.u2.com/roles"])
    }
    const role = localStorage.getItem("roles");
    console.log(role);
    if (role === "Admin") {       
        return (
            <div>
                <Navigate to= "/admin"/>
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                    <p>Admin</p>
                </AppBar>
            </div>
        );
    }
    else if (role === "User") { 
        return (
            <div>
                <Navigate to= "/user"/>
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                    <p>User</p>
                </AppBar>
            </div>
        )
    }
    else {
        return (
            <div>
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                </AppBar>
            </div>
        )
    }

}

export default Navbar;