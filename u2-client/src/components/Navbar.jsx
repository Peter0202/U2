import { AppBar } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    const { user } = useAuth0();
    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                {!user && (
                    <LoginButton />
                )
                }
                {user && (
                    <LogoutButton />
                )
                }

            </AppBar>
        </div>
    );
}

export default Navbar;