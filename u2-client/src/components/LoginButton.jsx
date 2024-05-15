import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button variant="outlined" onClick={() => loginWithRedirect()}>
                Log In
            </Button>
        )
    );
}

export default LoginButton;