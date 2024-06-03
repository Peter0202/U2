import { AppBar } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsers } from "../api/userApi";
import UserList from "./UserList";
import { useState } from "react";
import { useEffect } from "react";
import { createUser } from "../api/userApi";
import { deleteUser } from "../api/userApi";

function Navbar() {
    const { user, getIdTokenClaims } = useAuth0();
    if (user) {
        let claims = getIdTokenClaims();
        console.log(user["http://www.u2.com/roles"]);
    }

    const [users, setUsers] = useState([]);

    const refreshUserList = () => {
        getAllUsers().then(usersList => {
            setUsers(usersList);

        }).catch(error => console.log(error));
    }

    

    useEffect(() => {
        refreshUserList();
    }, [users]);

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                <LoginButton />
                <LogoutButton />
            </AppBar>

            <div className="inner">
                <UserList users={users} />
            </div>

        </div>
    );
}

export default Navbar;