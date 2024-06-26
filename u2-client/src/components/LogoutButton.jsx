import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    const role = localStorage.getItem("roles");
    
    return (
        isAuthenticated && role && (
            <Button variant="outlined" color = "primary" onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
                window.localStorage.clear();
            }
                }>
                Log Out
            </Button>
        )
    );
}

export default LogoutButton;
