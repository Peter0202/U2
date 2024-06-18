import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { Navigate } from "react-router";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    
    const newUser = localStorage.getItem("newUser");

    if (!isAuthenticated) {
        return (
            <Button variant="outlined" onClick={() => { 
                loginWithRedirect(); 
                if (user) {
                    let claims = getIdTokenClaims();
                    localStorage.setItem("roles", user["http://www.u2.com/roles"]);
                    
                }
             }}>
                Log In
            </Button>
        );
    }
    if (newUser !== 'undefined') {
        return (
            <Button variant="outlined" onClick={() => { 
                loginWithRedirect();
                if (user) {
                    let claims = getIdTokenClaims();
                    localStorage.setItem("roles", user["http://www.u2.com/roles"]);
                    
                }
                 }}>
                Log In
            </Button>
        );
    }
    else{
        return(<div></div>)
    }



}

export default LoginButton;