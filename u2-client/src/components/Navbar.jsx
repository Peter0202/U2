import { AppBar } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsers } from "../api/userApi";
import UserList from "./UserList";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
    const { user, getIdTokenClaims } = useAuth0();
    if (user) {
        let claims = getIdTokenClaims();
        console.log(user["http://www.u2.com/roles"]);
    }

    const [users, setUsers] = useState([]);

    const refreshUserList = () => {
        getAllUsers().then(usersList => {setUsers(usersList);

        }).catch(error => console.log(error));
        console.log(users);
    }

    useEffect(() => {
        refreshUserList();
    }, []);

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                <LoginButton />
                <LogoutButton />
                <div className="inner">
                    <UserList users = {Array(users)}/>
                </div>
            </AppBar>
        </div>
    );
}

export default Navbar;