import { AppBar } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { createUser } from "../api/userApi";

function Navbar() {

    const { user, getIdTokenClaims } = useAuth0();
    console.log(user);
    if (user) {
        let claims = getIdTokenClaims();
        localStorage.setItem("roles", user["http://www.u2.com/roles"]);
        localStorage.setItem("newUser", user["http://www.u2.com/newUser"]);
    }

    const newUser = localStorage.getItem("newUser");
    const role = localStorage.getItem("roles");
    console.log(role);
    console.log(localStorage.getItem("newUser"));

    const registerNewUser = async () => {
        await createUser(user.nickname).then(localStorage.removeItem("newUser"));
        console.log("registered user");
    }

    if(newUser !== 'undefined' && role === ''){
        registerNewUser();
        console.log('registered new user')
    }



    if (role === "Admin") {
        return (
            <div className=".d-flex flex-row">
                <Navigate to="/admin" />
                <AppBar position="static" sx={{ bgcolor: '#696969' }}>
                    <LoginButton />
                    <LogoutButton />
                    <p>Admin</p>
                </AppBar>
            </div>
        );
    }
    else if (role === "User") {
        return (
            <div className=".d-flex flex-row">
                <Navigate to="/user" />
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
            <div className=".d-flex flex-row">
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                </AppBar>
            </div>
        )
    }

}

export default Navbar;